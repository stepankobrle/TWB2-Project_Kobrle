import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const DeleteProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Stav pro řízení zobrazení modalu

    const handleDelete = () => {
        // Tady bude logika pro smazání produktu
        console.log("Produkt byl smazán");
        setIsModalOpen(false); // Zavření modalu po smazání
    };

    const handleCancel = () => {
        setIsModalOpen(false); // Zavření modalu, pokud uživatel zruší
    };

    const handleOverlayClick = (e) => {
        // Zavření modalu při kliknutí mimo modal
        if (e.target.classList.contains("overlay")) {
            setIsModalOpen(false);
        }
    };

    return (
        <div>
            <div className="flex justify-center">
                <button onClick={() => setIsModalOpen(true)}>
                    <FaRegTrashCan fontSize={24} />
                </button>
            </div>

            {/* Modal pro potvrzení smazání */}
            {isModalOpen && (
                <div
                    className="overlay fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
                    onClick={handleOverlayClick} // Zavře modal, když kliknete mimo něj
                >
                    <div className="bg-white p-6 rounded-lg w-96" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-xl font-semibold mb-4">Opravdu chcete smazat tento produkt?</h2>
                        <div className="flex justify-between">
                            <button
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                                onClick={handleCancel} // Zavření modalu při zrušení
                            >
                                Zrušit
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                onClick={handleDelete} // Zavolání funkce pro smazání
                            >
                                Smazat
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteProduct;
