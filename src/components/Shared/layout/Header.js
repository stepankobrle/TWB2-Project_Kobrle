import React, { Fragment, useState } from 'react'
import {useAuth} from "../../auth/AuthProvider";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { GiShop } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";
import {HiOutlineSearch} from "react-icons/hi";
import classNames from "classnames";
import LogoutButton from "../../auth/LogoutButton";


const linkClass =
    'flex items-center gap-2 font-bold px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-900 rounded-sm text-base'

export default function Header() {
    const { currentUser, authToken, handleLogout } = useAuth();
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-black/90 w-full border-b">
            <div className="container mx-auto h-16 px-4 flex items-center  border-gray-200 justify-between max-w-[1400px]">
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="focus:outline-none"
                    >
                        <GiHamburgerMenu fontSize={24}  color="#4CAE50"  v hex kódu className="hover:text-green-500"/>
                    </button>
                </div>

                <div className="flex-grow flex justify-center lg:flex-grow-0 lg:justify-start">
                    <div className="  flex items-center gap-2 px-1 py-3">
                        <GiShop className="text-green-500" fontSize={24} />
                        <span className="text-neutral-200 text-lg">StyleSphere</span>
                    </div>
                </div>


                <div className="relative ">
                    <div className={"hidden lg:flex flex-row gap-10 no-underline"}>
                        <Link to={"/"} className={classNames(pathname == "/" ? 'bg-neutral-700 text-white' : 'text-neutral-400 text-2xl ', linkClass)}>Home</Link>
                        <Link to={"/Men"} className={classNames(pathname == "ManPage" ? 'bg-neutral-700 text-white' : 'text-neutral-400 text-2xl ', linkClass)}>Men</Link>
                        <Link to={"/Women"} className={classNames(pathname == "WomenPage" ? 'bg-neutral-700 text-white' : 'text-neutral-400 text-2xl ', linkClass)}>Women</Link>
                        <Link to={"/Kids"} className={classNames(pathname == "KidsPage" ? 'bg-neutral-700 text-white' : 'text-neutral-400 text-2xl ', linkClass)}>Kids</Link>
                    </div>
                </div>
                    <Navbar />
            </div>

            {isMenuOpen && (
                <div className="lg:hidden bg-neutral-900 p-4 flex items-center flex-col">
                    <div className={"flex flex-col item items-center py-3"}>
                        <Link to={"/"} className={classNames( 'text-neutral-400 text-2xl ', linkClass)}>Home</Link>
                        <Link to={"Men"} className={classNames( 'text-neutral-400 text-2xl ', linkClass)}>Men</Link>
                        <Link to={"#"} className={classNames('text-neutral-400 text-2xl ', linkClass)}>Women</Link>
                        <Link to={"#"} className={classNames('text-neutral-400 text-2xl ', linkClass)}>Kids</Link>
                    </div>
                    <AuthenticatedContent>
                        <div className={"flex flex-col items-center py-3 border-t"}>
                            <Link to={"/account"} className={classNames( 'text-neutral-400 text-2xl ', linkClass)}>Your profile</Link>
                            <Link to={"#"} className={classNames( 'text-neutral-400 text-2xl ', linkClass)}>Settings</Link>
                        </div>
                        <div className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 mt-4">
                            <LogoutButton/>
                        </div>
                    </AuthenticatedContent>
                </div>
            )}

        </div>
    )
}


const AuthenticatedContent = ({ children }) => {
    const { authToken, currentUser } = useAuth();

    // Zobrazí children pouze v případě, že je uživatel přihlášen
    if (authToken && currentUser) {
        return <>{children}</>;
    }

    // Pokud není přihlášen, vrátí null (nic se nezobrazí)
    return null;
};

