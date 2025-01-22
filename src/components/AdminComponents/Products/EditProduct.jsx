import React, { useState } from "react";
import productsData from "../../../data/Products.json";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const { id } = useParams();
    const products = productsData.products;
    const product = products.find((p) => p._id === id);

    // Výchozí stav pro editovaný produkt
    const [editedProduct, setEditedProduct] = useState({
        name: product?.name || "",
        description: product?.description || "",
        price: product?.price || 0,
        image: product?.image[0] || "",
        category: product?.category || "",
        subCategory: product?.subCategory || "",
        sizes: product?.sizes || [],
        color: product?.color || "",
    });

    // Pokud produkt nebyl nalezen, zobraz chybovou zprávu
    if (!product) {
        return <div className="text-red-500">Product not found.</div>;
    }

    // Funkce pro změnu hodnot vstupních polí
    const handleChange = (e) => {
        const { id, value } = e.target;
        setEditedProduct((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // Přidání nové velikosti
    const handleAddSize = () => {
        setEditedProduct((prev) => ({
            ...prev,
            sizes: [...prev.sizes, ""],
        }));
    };

    // Změna hodnoty velikosti
    const handleSizeChange = (index, value) => {
        const updatedSizes = [...editedProduct.sizes];
        updatedSizes[index] = value;
        setEditedProduct((prev) => ({
            ...prev,
            sizes: updatedSizes,
        }));
    };

    // Odstranění velikosti
    const handleRemoveSize = (index) => {
        const updatedSizes = editedProduct.sizes.filter((_, i) => i !== index);
        setEditedProduct((prev) => ({
            ...prev,
            sizes: updatedSizes,
        }));
    };

    // Odeslání formuláře
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated product:", editedProduct);

        // Simulace aktualizace produktů (v reálné aplikaci by se odeslalo na backend)
        const updatedProducts = products.map((p) =>
            p._id === id ? { ...p, ...editedProduct } : p
        );
        console.log("Updated products list:", updatedProducts);

        // Zde byste mohli přidat kód pro odeslání dat na backend
    };

    // Pole pro dynamické generování formuláře
    const fields = [
        { id: "name", label: "Product Name", type: "text" },
        { id: "description", label: "Description", type: "textarea" },
        { id: "price", label: "Price", type: "number" },
        { id: "image", label: "Image", type: "text" },
        { id: "category", label: "Category", type: "text" },
        { id: "subCategory", label: "Subcategory", type: "text" },
        { id: "color", label: "Color", type: "text" },
    ];

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Dynamické generování polí */}
                {fields.map((field) => (
                    <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                            {field.label}
                        </label>
                        {field.type === "textarea" ? (
                            <textarea
                                id={field.id}
                                value={editedProduct[field.id]}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        ) : (
                            <input
                                id={field.id}
                                type={field.type}
                                value={editedProduct[field.id]}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        )}
                    </div>
                ))}

                {/* Pole pro velikosti */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Sizes</label>
                    {editedProduct.sizes.map((size, index) => (
                        <div key={index} className="flex items-center space-x-2 mt-2">
                            <input
                                type="text"
                                value={size}
                                onChange={(e) => handleSizeChange(index, e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveSize(index)}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddSize}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Add Size
                    </button>
                </div>

                {/* Tlačítko pro uložení */}
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditProduct;