import React from 'react';
import {useState} from "react";
import { useParams, Link } from 'react-router-dom';
import productsData from "../data/Products.json"
import Header from "../components/Shared/layout/Header";
import OneProduct from "../components/OneProduct";
import Footer from "../components/Shared/layout/Footer";
import PopularProducts from "../components/SimilarProducts";


const ProductPage = () => {

    return (
        <div>
            <Header />
            <OneProduct/>
            <PopularProducts/>
            <Footer/>
        </div>
    )
}

export default ProductPage;

