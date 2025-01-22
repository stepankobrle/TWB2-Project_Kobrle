import React, { useState, useEffect } from "react";
import productsData from "../data/Products.json"; // Import JSON souboru
import Item from "./Item"; // Import komponenty Item

const SearchFilterProducts = ({ category }) => { // Přijímá kategorii jako prop
    const [products, setProducts] = useState([]); // Inicializace jako prázdné pole
    const [query, setQuery] = useState(""); // Textové vyhledávání
    const [selectedSubCategory, setSelectedSubCategory] = useState(""); // Filtrování podle podkategorie
    const [loading, setLoading] = useState(true); // Stav načítání

    // Načtení dat z importovaného JSON souboru
    useEffect(() => {
        try {
            console.log("Původní data:", productsData); // Zkontrolujte původní data

            // Kontrola, zda productsData.products je pole
            if (Array.isArray(productsData.products)) {
                setProducts(productsData.products); // Pokud je JSON strukturován jako { "products": [...] }
            } else if (Array.isArray(productsData)) {
                setProducts(productsData); // Pokud je JSON strukturován jako [...]
            } else {
                throw new Error("Data nejsou ve formátu pole.");
            }

            setLoading(false); // Ukončení načítání
        } catch (error) {
            console.error("Chyba při zpracování dat:", error);
            setLoading(false); // Ukončení načítání i v případě chyby
        }
    }, []);

    // Filtrování produktů
    const filteredProducts = products.filter((product) => {
        const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = product.category === category; // Kategorie je dynamická
        const matchesSubCategory = selectedSubCategory ? product.subCategory === selectedSubCategory : true;
        console.log("Product:", product.name, "Matches Query:", matchesQuery, "Matches Category:", matchesCategory, "Matches SubCategory:", matchesSubCategory); // Logování
        return matchesQuery && matchesCategory && matchesSubCategory;
    });

    console.log("Query:", query, "Selected SubCategory:", selectedSubCategory); // Logování

    if (loading) {
        return <div>Načítání dat...</div>; // Zobrazení stavu načítání
    }

    return (
        <div className="p-4 max-w-[1400px] mx-auto pt-16">
            <h1 className="text-2xl font-bold mb-4 px-3">{category} </h1> {/* Dynamický název kategorie */}

            <div className={"flex flex-col md:flex-row gap-2 pb-5 px-3"}>
                {/* Vyhledávací pole */}
                <input
                    type="text"
                    placeholder="Hledat produkty..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border p-2 rounded mb-4 w-full"
                />

                {/* Výběr podkategorie */}
                <select
                    value={selectedSubCategory}
                    onChange={(e) => setSelectedSubCategory(e.target.value)}
                    className="border p-2 rounded mb-4 w-full"
                >
                    <option value="">Všechny podkategorie</option>
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                </select>
            </div>

            {/* Zobrazení filtrovaných produktů pomocí komponenty Item */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20">
                {filteredProducts.map((product) => (
                    <Item key={product._id} product={product} /> // Použití komponenty Item
                ))}
            </div>
        </div>
    );
};

export default SearchFilterProducts;