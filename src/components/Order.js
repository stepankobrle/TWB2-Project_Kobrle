import React from 'react';
import img from "./lib/img";

const Order = ({ order }) => {
    // Pokud není obrázek k dispozici, použije se výchozí obrázek
    const imageSrc = img[order?.image[0]] || "/img/default-image.png";

    return (
        <div className="border shadow-md p-4 mb-4 bg-white">
            <div className="flex justify-between items-center space-x-4">
                {/* Obrázek produktu */}
                <div className="w-24 h-24 flex-shrink-0">
                    <img
                        src={imageSrc}
                        alt={order?.name || "Product Image"}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Tlačítko pro akci (např. zobrazení detailu) */}
                <div>
                    <button
                        className="bg-white text-black px-4 py-2  border-2 border-black hover:bg-neutral-200"
                        onClick={() => {
                            // Akce po kliknutí na tlačítko
                            console.log("View details for product:", order?.name);
                        }}
                    >
                        View Details
                    </button>
                </div>
            </div>

            {/* Informace o objednávce */}
            <div className="flex flex-col md:flex-row mt-4 space-y-2 items-center ">
                <div className={"flex md:flex-col mx-auto"}>
                    <div><strong>Order number:</strong></div>
                    {order?.orderId || "N/A"}
                </div>
                <div className={"flex md:flex-col mx-auto"}>
                    <div> <strong>Shipped date:</strong></div>
                    {order?.shippedDate || "N/A"}
                </div>
                <div className={"flex md:flex-col mx-auto"}>
                    <div ><strong>Total:</strong></div>
                    ${order?.totalAmount?.toFixed(2) || "0.00"}
                </div>
                <div className={"flex md:flex-col mx-auto"}>
                    <div ><strong>Status:</strong></div>
                    {order?.status || "N/A"}
                </div>
            </div>
        </div>
    );
};

export default Order;