import React from "react"
import { Link } from "react-router-dom";
import DashboardStatsGrid from "../../components/AdminComponents/AdminDashboard/DashboardStatsGrid";
import TransactionChart from "../../components/AdminComponents/AdminDashboard/TransactionChart";
import BuyerProfilePieChart from "../../components/AdminComponents/AdminDashboard/BuyerProfilePieChart";
import PopularProducts from "../../components/AdminComponents/AdminDashboard/PopularProducts";
import RecentOrders from "../../components/AdminComponents/AdminDashboard/RecentOrders";

export default function AdminDashboard() {
    return (
        <div className={"flex flex-col gap-4 w-full"}>
            <div><DashboardStatsGrid/></div>
            <div className="  xl:flex flex-row  gap-4 w-full">
                <TransactionChart/>
                <span className={"hidden xl:block"}><BuyerProfilePieChart/></span>
            </div>
            <div className="flex flex-col xl:flex-row gap-4 w-full">
                <RecentOrders/>
                <PopularProducts/>
            </div>
        </div>
    )
}