import React, {useState} from 'react';
import Header from "./Shared/layout/Header";
import { useParams, Link } from 'react-router-dom';
import productsData from "../data/Products.json"
import img from "./lib/img";


const OneProduct = (OneProduct) => {
    const { id } = useParams(); // Získání ID z URL
    const [amount, setAmount] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);

    const products = productsData.products; // Získání pole produktů z objektu
    const product = products.find((p) => p._id === id); // Nalezení produktu podle ID

    if (!product) {
        return <p>Produkt nebyl nalezen.</p>;
    }

    const imageSrc = img[product?.image[0]] || "/img/default-image.png";

    return (
            <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center max-w-[1600px] mx-auto'>
                <div className='flex flex-col gap-6 lg:w-2/4'>
                    <img
                        src={imageSrc}
                        alt={product.name}
                        className='w-full max-w-3xl h-auto object-cover '
                    />
                </div>
                {/* ABOUT */}
                <div className='flex flex-col gap-4 lg:w-2/4 px-6'>
                    <div>
                        <span className=' text-violet-600 font-semibold'>{product.category}</span>
                        <h1 className='text-3xl font-bold'>{product.name}</h1>
                    </div>
                    <p className='text-gray-700'>
                        {product.description}
                    </p>
                    <h6 className='text-2xl font-semibold'>$ {product.price}.00</h6>
                    <div className='flex flex-col gap-4'>

                        <div className='flex flex-wrap gap-3'>
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-2 px-4 rounded-lg border border-gray-200 ${
                                        selectedSize === size
                                            ? 'bg-violet-800 text-white'
                                            : 'bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                    </div>
                    <div className='flex flex-row items-center gap-12'>
                        <div className='flex flex-row items-center'>
                            <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                            <span className='py-4 px-6 rounded-lg'>{amount}</span>
                            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                        </div>
                        <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                    </div>
                </div>
            </div>

    )
}

export default OneProduct;