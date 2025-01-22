import React from 'react';

const Banner = () => {
    return (
        <div className={"flex  justify-center py-20 w-full bg-[#EEFDFF]"}>
            <div>
                <div className={"flex items-center text-center pb-6 px-3"}>
                    If you want to get a discount on your first order, enter your email.
                </div>
                <div className={"flex justify-center flex-wrap "}>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-72 p-3 border border-black rounded-full"
                />
                    <button className={"w-28 bg-blue-500 text-white p-3 mx-4 rounded-full mt-4 xs:mt-0"}>Send</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;