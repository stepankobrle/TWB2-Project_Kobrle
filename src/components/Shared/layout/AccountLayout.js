import React from 'react';
import AccountSidebar from "./AccountSidebar";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
const AccountLayout = () => {
    return (
        <div className={"bg-neutral-100"}>
            <Header/>
            <div className={"flex max-w-[1400px] px-4 pt-16 pb-4 mx-auto "}>
                <h1 className={"text-2xl font-bold"}>My account</h1>
            </div>

            <div className={"flex flex-col md:flex-row max-w-[1400px] mx-auto px-4 pb-20"}>
                <div className=""> {/* Omezení šířky postranního panelu */}
                    <AccountSidebar/>
                </div>
                <div className="flex-1"> {/* Hlavní obsah zabírá zbývající místo */}
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default AccountLayout;