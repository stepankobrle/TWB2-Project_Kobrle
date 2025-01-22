import React from 'react';
import productsData from "../../../data/Products.json"; // Předpokládám, že máte JSON s produkty
import images from "../../lib/img"; // Importujeme objekt s obrázky
import DeleteProduct from "./DeleteProduct";
import {useNavigate} from "react-router-dom";
import { CiEdit } from 'react-icons/ci';

const ProductTable = () => {
    const navigate = useNavigate();
    const products = productsData.products; // Získání pole produktů z objektu
    const handleEdit = (productId) => { navigate(`/admin/products/editproduct/${productId}`);};

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                <tr className="bg-neutral-800 text-white">
                    {/* ID a Name sloupce jsou viditelné pro všechny velikosti */}
                    <th className="px-4 py-2 border border-gray-600">ID</th>
                    <th className="px-4 py-2 border border-gray-600 hidden lg:table-cell">Image</th> {/* Skrytí pro mobil */}
                    <th className="px-4 py-2 border border-gray-600">Name</th>
                    <th className="px-4 py-2 border border-gray-600 hidden lg:table-cell">Category</th> {/* Skrytí pro mobil */}
                    <th className="px-4 py-2 border border-gray-600 hidden lg:table-cell">Price</th> {/* Skrytí pro mobil */}
                    <th className="px-4 py-2 border border-gray-600">Edit</th>
                    <th className="px-4 py-2 border border-gray-600">Delete</th>
                </tr>
                </thead>
                <tbody>
                {products.map((item, index) => {
                    const imageSrc = images[item.image[0]] || "/img/default-image.png"; // Dynamické přiřazení obrázku

                    return (
                        <tr key={index} className="border-b bg-white">
                            <td className="px-4 py-2 border border-gray-300">{item._id}</td>
                            {/* Obrázek je skrytý na mobilních zařízeních */}
                            <td className="px-4 py-2 border border-gray-300 hidden lg:table-cell">
                                <img
                                    src={imageSrc}
                                    alt={item.name}
                                    className="w-full max-w-[50px] h-auto object-cover"
                                />
                            </td>
                            <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                            {/* Kategorii a cenu skryjeme na mobilu */}
                            <td className="px-4 py-2 border border-gray-300 hidden lg:table-cell">{item.category}</td>
                            <td className="px-4 py-2 border border-gray-300 hidden lg:table-cell">{item.price}</td>
                            <td className="px-4 py-2 border border-gray-300 ">
                                <div className="flex justify-center">
                                    <button onClick={() => handleEdit(item._id)}>
                                        <CiEdit fontSize={24}/>
                                    </button>
                                </div>
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                <DeleteProduct/>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
