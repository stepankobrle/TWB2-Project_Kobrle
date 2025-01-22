import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Title from "./Title";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import productsData from "../data/Products.json";
import Item from "./Item";


const NewArrivals = () => {

    const [newArrivals, setNewArrivals] = useState([])

    useEffect(() => {
        // Načtení prvních 10 produktů z JSON souboru
        const data = productsData.products.slice(0, 10);
        setNewArrivals(data); // Uložení do stavu
    }, []);

    return (
        <section className="w-full bg-[#EEFDFF]">
            <div className=" px-6  max-w-[1850px] mx-auto pb-20">
           <Title/>

                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        850: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                        1500: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="h-[500px]"
                >
                    {newArrivals.map((product) => (
                        <SwiperSlide key={product._id} >
                            <Item product={product}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
);
};

export default NewArrivals;