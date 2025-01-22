import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import productsData from "../../../data/Products.json";
import images from "../../lib/img"; // Předpokládám, že `images` obsahuje mapu obrázků

function PopularProducts() {
    // Filtrování produktů s vlastností `popular: true`
    const popularProducts = productsData.products.filter(product => product.popular);

    return (
        <div className="w-full xl:w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 font-medium">Popular Products</strong>
            <div className="mt-4 flex flex-col gap-3">
                {popularProducts.map((product) => {
                    // Dynamické přiřazení obrázku
                    const imageSrc = images[product.image[0]] || "/img/default-image.png";

                    return (
                        <Link
                            key={product._id} // Používám `_id` jako klíč
                            to={`/product/${product._id}`}
                            className="flex items-start hover:no-underline"
                        >
                            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
                                <img
                                    className="w-full h-full object-cover rounded-sm"
                                    src={imageSrc} // Dynamické zobrazení obrázku
                                    alt={product.name}
                                />
                            </div>
                            <div className="ml-4 flex-1">
                                <p className="text-sm text-gray-800">{product.name}</p>
                            </div>
                            <div className="text-xs text-gray-400 pl-1.5">${product.price}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default PopularProducts;
