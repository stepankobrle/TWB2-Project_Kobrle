import React from 'react';
import { useAuth } from '../auth/AuthProvider'; // Importuj useAuth hook
import ordersData from '../../data/Orders.json'; // Importujte JSON soubor
import Order from "../Order"; // Importujte komponentu Order

const AccountOrders = () => {
    const { authToken, currentUser } = useAuth(); // Získání dat z useAuth hooku

    // Pokud není uživatel přihlášen, přesměrujte ho na přihlašovací stránku
    if (!authToken) {
        return <p className="p-6">Prosím, přihlaste se, abyste viděli své objednávky.</p>;
    }

    // Získání seznamu objednávek z JSON souboru
    const orders = ordersData || []; // Ochrana proti undefined


    return (
        <div className="p-6 bg-white max-w-[700px] border border-neutral-200">
            <h1 className="text-2xl font-bold mb-4">Seznam objednávek</h1>
            {orders.map((order) => (
                <Order key={order.orderId} order={order} />
                ))}
        </div>
    );
};

export default AccountOrders;