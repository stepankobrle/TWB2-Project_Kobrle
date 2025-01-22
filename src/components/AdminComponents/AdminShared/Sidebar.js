import React, { useState } from "react";
import classNames from 'classnames'
import { GiShop } from "react-icons/gi";
import { HiOutlineLogout } from 'react-icons/hi'
import {DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS} from "../../lib/navigation";
import {Link, useLocation} from "react-router-dom";
import LogoutButton from "../../auth/LogoutButton";


const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Sidebar */}
            <div className={classNames("bg-neutral-900 w-60 p-3 flex flex-col fixed h-full md:static transform transition-transform duration-200 ease-in-out z-50", // Změněno md:relative na md:static
                    {
                        "translate-x-0": isSidebarOpen, // Sidebar je otevřený
                        "-translate-x-full": !isSidebarOpen, // Sidebar je skrytý
                        "md:translate-x-0": true, // Na větších obrazovkách je sidebar vždy viditelný
                    }
                )}
            >
                {/* Logo a název */}
                <div className="flex items-center gap-2 px-1 py-3">
                    <GiShop className="text-green-500" fontSize={24} />
                    <span className="text-neutral-200 text-lg">StyleSphere</span>
                </div>

                {/* Hlavní odkazy */}
                <div className="py-8 flex flex-1 flex-col gap-0.5">
                    {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                        <SidebarLink key={link.key} link={link} />
                    ))}
                </div>

                {/* Spodní odkazy a tlačítko odhlášení */}
                <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                        <SidebarLink key={link.key} link={link} />
                    ))}
                    <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                        <span className="text-xl">
                            <HiOutlineLogout />
                        </span>
                        <LogoutButton />
                    </div>
                </div>
            </div>

            {/* Tlačítko pro otevření/skrytí sidebaru na mobilních zařízeních */}
            <button
                className="md:hidden fixed bottom-4 right-4 p-3 bg-neutral-800 rounded-full shadow-lg text-neutral-200 hover:bg-neutral-700 z-50"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Přepíná stav sidebaru
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Překryv pro mobilní zobrazení (když je sidebar otevřený) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)} // Kliknutím mimo sidebar ho zavře
                />
            )}
        </>
    );
}


function SidebarLink({ link }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}