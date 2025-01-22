import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../../lib/Helpers'

const recentOrderData = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '7',
        product_id: '7453',
        customer_id: '96453',
        customer_name: 'Ryan Carroll',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
    },
    {
        id: '2',
        product_id: '5434',
        customer_id: '65345',
        customer_name: 'Mason Nash',
        order_date: '2022-05-17T07:14:00',
        order_total: '$836.44',
        current_order_status: 'SHIPPED',
        shipment_address: 'Westminster, CA 92683'
    },
    {
        id: '3',
        product_id: '9854',
        customer_id: '87832',
        customer_name: 'Luke Parkin',
        order_date: '2022-05-16T12:40:00',
        order_total: '$334.50',
        current_order_status: 'SHIPPED',
        shipment_address: 'San Mateo, CA 94403'
    },
    {
        id: '4',
        product_id: '8763',
        customer_id: '09832',
        customer_name: 'Anthony Fry',
        order_date: '2022-05-14T03:24:00',
        order_total: '$876.00',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipment_address: 'San Mateo, CA 94403'
    },
    {
        id: '5',
        product_id: '5627',
        customer_id: '97632',
        customer_name: 'Ryan Carroll',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'DELIVERED',
        shipment_address: 'Los Angeles, CA 90017'
    }
]

export default function RecentOrders() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Recent Orders</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                {/* Tabulka pro větší obrazovky */}
                <div className="hidden xl:block">
                    <table className="w-full text-gray-700">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product ID</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Order Total</th>
                            <th>Shipping Address</th>
                            <th>Order Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentOrderData.map((order) => (
                            <tr key={order.id}>
                                <td>
                                    <Link to={`/order/${order.id}`}>#{order.id}</Link>
                                </td>
                                <td>
                                    <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
                                </td>
                                <td>
                                    <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
                                </td>
                                <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
                                <td>{order.order_total}</td>
                                <td>{order.shipment_address}</td>
                                <td>{getOrderStatus(order.current_order_status)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Karty pro mobilní zařízení */}
                <div className="xl:hidden">
                    {recentOrderData.map((order) => (
                        <div key={order.id} className="bg-white p-4 border border-neutral-200 shadow-sm mb-3">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">Order ID:</span>
                                <Link to={`/order/${order.id}`} className="text-blue-500 hover:underline">#{order.id}</Link>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">Product ID:</span>
                                <Link to={`/product/${order.product_id}`} className="text-blue-500 hover:underline">#{order.product_id}</Link>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">Customer Name:</span>
                                <Link to={`/customer/${order.customer_id}`} className="text-blue-500 hover:underline">{order.customer_name}</Link>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">Order Date:</span>
                                <span>{format(new Date(order.order_date), 'dd MMM yyyy')}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">Order Total:</span>
                                <span>{order.order_total}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">Shipping Address:</span>
                                <span>{order.shipment_address}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-medium">Order Status:</span>
                                <span>{getOrderStatus(order.current_order_status)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}