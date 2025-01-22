import React from 'react';
import Header from "../components/Shared/layout/Header";
import Footer from "../components/Shared/layout/Footer";
import SearchFilterProducts from "../components/SearchFilterProducts";

const ManPages = () => {
    return (
        <div>
            <Header/>
            <SearchFilterProducts category="Men" />
            <Footer/>
        </div>
    );
};

export default ManPages;