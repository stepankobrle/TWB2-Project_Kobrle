import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import classNames from 'classnames';
import LogoutButton from '../../auth/LogoutButton'; // Předpokládáme, že máte komponentu LogoutButton
import { useAuth } from '../../auth/AuthProvider'; // Importujte váš useAuth hook
import ProfileDropdown from "../../UserComponents/ProfileDropdown";
import { FaHome, FaUser, FaCog, FaSignInAlt, FaUserCircle, FaHeart, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
    const { currentUser, authToken, handleLogout } = useAuth();
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();

    const linkClass =
        'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-900 rounded-sm text-base'

    let links;

    if (!authToken) {
        links = (
            <div className={"text-white flex flex-row md:gap-4"}>
                <Link to={"/login"}
                      className={classNames(pathname == "/login" ? 'bg-neutral-700 text-white' : 'text-neutral-400 text-2xl bg-blue-950', linkClass)}>
                    Log in
                </Link>
                <Link to={"/login"}
                      className={classNames(pathname == "/login" ? 'bg-neutral-700 text-white' : 'text-neutral-400 text-2xl', linkClass)}>
                    <FaHeart className="text-xl" />
                </Link>
                <Link to={"/login"}
                      className={classNames(pathname == "/login" ? 'bg-neutral-700 text-white' : 'text-neutral-400 text-2xl', linkClass)}>
                    <FaShoppingCart className="text-xl" />
                </Link>
            </div>
                );
    } else if (authToken && currentUser) {
        if (currentUser.role === 'admin') {
            links = (
                <div className={"text-white flex flex-row  "}>
                    <Link to={"/admin"}
                          className={classNames(pathname == "/admin" ? 'bg-neutral-700 text-white font-extrabold' : 'text-neutral-400 text-2xl  font-extrabold', linkClass)}>
                        Admin
                    </Link>
                    <Link to={"/account"}
                          className={classNames('text-neutral-400 text-2xl', linkClass)}>
                        <FaHeart className="text-xl" />
                    </Link>
                    <Link to={"/"}
                          className={classNames( 'text-neutral-400 text-2xl', linkClass)}>
                        <FaShoppingCart className="text-xl" />
                    </Link>

                    <ProfileDropdown/>
                </div>
            );
        } else if (currentUser.role === 'user') {
            links = (
                <div className={"text-white flex flex-row  md:gap-4"}>
                    <Link to={"/"}
                          className={classNames( 'text-neutral-400 text-2xl', linkClass)}>
                        <FaHeart className="text-xl" />
                    </Link>
                    <Link to={"/"}
                          className={classNames( 'text-neutral-400 text-2xl', linkClass)}>
                        <FaShoppingCart className="text-xl" />
                    </Link>

                    <ProfileDropdown/>
                </div>
            )
        }
    }

    return (
        <nav>
            <ul>
                {links}
            </ul>
        </nav>
    );
}

export default Navbar;