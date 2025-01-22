import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './components/auth/AuthProvider';
import Login from "./pages/Login";
import Home from "./pages/Home";
import AccountPage from "./pages/user/AccountPage";
import AccountOrders from "./components/UserComponents/AccountOrders";
import Layout from './components/AdminComponents/AdminShared/Layout';
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Products from "./pages/Admin/Products";
import OneProduct from "./pages/ProductPage";
import EditProductPage from "./pages/Admin/EditProductPage";
import ManPage from "./pages/ManPages";
import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";


export default function App() {
    const { authToken, currentUser } = useAuth(); // Získání stavu autentizac

    return (
        <Router>
            <Routes>
                {/* public routy */}
                <Route path="/" element={<Home />} />
                <Route path="/Men" element={<ManPage />} />
                <Route path="/Women" element={<WomenPage />} />
                <Route path="/Kids" element={<KidsPage />} />
                <Route path="/OneProduct/:id" element={<OneProduct />} />
                <Route path="/login" element={<Login />} />

                {/* user admin routy */}
                <Route
                    path="/account"
                    element={authToken ? <AccountPage/> : <Navigate to="/login" />}
                >
                    <Route index element={<AccountOrders />} />
                </Route>

                {/* Admin routy */}
                <Route
                    path="/admin"
                    element={
                        authToken && currentUser?.role === 'admin' ? (
                            <Layout />) : (
                                <Navigate to="/login" />
                        )
                    }
                >
                    <Route index element={<AdminDashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/editproduct/:id" element={<EditProductPage />} />
                </Route>

                {/* Výchozí routa (404) */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

