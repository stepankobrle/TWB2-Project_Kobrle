import React from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../../components/auth/AuthProvider";
import ProductTable from "../../components/AdminComponents/Products/ProductTable";

export default function Products() {

    return (
        <div>
            <ProductTable/>
        </div>
    )
}