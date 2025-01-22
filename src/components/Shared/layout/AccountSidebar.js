import React, {useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";
import {useLocation} from "react-router-dom";
import classNames from "classnames";
import { FaShoppingBag, FaHeart, FaUser, FaKey, FaMapMarkerAlt, FaSignOutAlt } from 'react-icons/fa';

const AccountSidebar = () => {
    const { authToken, currentUser } = useAuth(); // Získání dat z useAuth hooku
    const { pathname } = useLocation();

    useEffect(() => {
        if (!authToken) {
            pathname('/login');
        }
    }, [authToken]);

    if (!currentUser) {
        return <p>Loading user data...</p>; // Čekání na načtení údajů o uživateli
    }


    return (
        <nav className="bg-neutral-900 xl:w-60 p-3 flex flex-col mr-2 ">
            <h2 className="flex justify-center md:justify-normal text-neutral-200 text-lg">Welcome, {currentUser.name}</h2>
            <ul className="space-y-1 py-8">
                {links.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={classNames(
                                "flex justify-center md:justify-normal items-center gap-2 font-light px-3 py-4 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base",
                                pathname === link.path ? "bg-neutral-700 text-white" : "text-neutral-400"
                            )}
                        >
                            {link.icon} {/* Zobrazení ikony */}
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default AccountSidebar;


const links = [
    { path: "/account", label: "Orders", icon: <FaShoppingBag /> },
    { path: "/account/favorites", label: "Favorites", icon: <FaHeart /> },
    { path: "/account/personal-data", label: "Personal Data", icon: <FaUser /> },
    { path: "/account/change-password", label: "Change Password", icon: <FaKey /> },
    { path: "/account/addresses", label: "Addresses", icon: <FaMapMarkerAlt /> },
    { path: "/account/sign-out", label: "Sign Out", icon: <FaSignOutAlt /> },
];