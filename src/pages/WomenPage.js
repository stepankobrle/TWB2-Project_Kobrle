import React from 'react';
import Header from "../components/Shared/layout/Header";
import Footer from "../components/Shared/layout/Footer";
import SearchFilterProducts from "../components/SearchFilterProducts";

const WomenPages = () => {
    return (
        <div>
            <Header/>
            <SearchFilterProducts category="Women" />
            <Footer/>
        </div>
    );
};

export default WomenPages;