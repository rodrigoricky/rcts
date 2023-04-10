import React from 'react';

const Data = [
    {
        image: "/images/brand/pizza.png"
    },
    {
        image: "/images/brand/cashier.png"
    },
    {
        image: "/images/brand/email.png"
    },
    {
        image: "/images/brand/checkup.png"
    },
    {
        image: "/images/brand/pharm.png"
    },
    {
        image: "/images/brand/cloth.png"
    },
    {
        image: "/images/brand/build.png"
    },
    {
        image: "/images/brand/resort.png"
    },
    {
        image: "/images/brand/hardware.png"
    },
    {
        image: "/images/brand/logistics.png"
    },
    {
        image: "/images/brand/cars.png"
    },
    {
        image: "/images/brand/taxi.png"
    }
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.image} alt="Brand" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;