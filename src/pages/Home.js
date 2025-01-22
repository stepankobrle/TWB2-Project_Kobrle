import React, {createContext, useContext} from "react";
import LogoutButton from "../components/auth/LogoutButton";
import Header from "../components/Shared/layout/Header";
import Footer from "../components/Shared/layout/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import NewArrivals from "../components/NewArrivals";
import Banner from "../components/Banner";
import PopularProducts from "../components/PopularProduct";

function Home() {

    return <div>
        <Header />
        <Hero />
        <Features/>
        <NewArrivals/>
        <PopularProducts/>
        <Banner/>
        <Footer/>




    </div>
}

export default Home;




