import React from "react";
import img from "./lib/img";


const Item = ({ product }) => {
    const imageSrc = img[product?.image[0]] || "/img/default-image.png";
    const href = `/OneProduct/${product._id}`;

    return (
        <a key={product.id} href={href} className="group hover:no-underline px-3">
            <img
                alt={product.imageAlt}
                src={imageSrc}
                className="aspect-square w-full rounded-sm bg-gray-200 object-cover group-hover:opacity-75 hover:no-underline xl:aspect-[7/8]"
            />
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}$</p>
        </a>
    );
};


export default Item;
