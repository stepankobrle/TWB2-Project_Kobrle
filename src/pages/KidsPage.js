import React from 'react';
import Header from "../components/Shared/layout/Header";
import Footer from "../components/Shared/layout/Footer";
import SearchFilterProducts from "../components/SearchFilterProducts";

const KidsPages = () => {
    return (
        <div>
            <Header/>
            <SearchFilterProducts category="Kids" />
            <Footer/>
        </div>
    );
};

export default KidsPages;