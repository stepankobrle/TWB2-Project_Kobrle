import React from 'react';
import Features1 from "../img/Features1.jpg"
import Features2 from "../img/Features2.jpg"

const Features = () => {
    return (
        <section className={"pt-14 pb-20 max-w-[1850px] mx-auto"}>
            <div className={"grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-6 gap-y-12 rounded-xl  "}>
                <div className={"flex justify-center gap-x-10"}>
                    <div>
                        <img src={Features1} alt={"FeaturesImg"} height={77} width={222} className={"rounded-full"}/>
                    </div>
                    <div>
                        <img src={Features2} alt={"FeaturesImg"} height={77} width={222} className={"rounded-full"}/>
                    </div>
                </div>
                <div className={"flex justify-center flex-wrap  sm:flex-nowrap gap-x-5 "}>
                    <div className={"p-4 rounded-3xl max-w-[350px]"}>
                        <h4 className={"text-h4 font-h4 capitalize"}>Quality Product</h4>
                        <p> Our products are crafted with precision and care, ensuring the highest level of quality and durability. </p>
                    </div>
                    <div className={"p-4 rounded-3xl max-w-[350px]"}>
                        <h4 className={"text-h4 font-h4 capitalize"}>Secure Payment</h4>
                        <p>   hop with confidence knowing that your transactions are protected by state-of-the-art encryption. </p>
                    </div>
                    <div className={"p-4 rounded-3xl max-w-[350px]" }>
                        <h4 className={"text-h4 font-h4 capitalize"}>Fast Delivery</h4>
                        <p>    We value your time and strive to get your orders to you as quickly as possible. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;