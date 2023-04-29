import React from 'react';
import TestimonialData from "../../data/testimonial/TestimonialData.json";


const allData = TestimonialData;


const TestimonialItem = ({colSize, itemShow}) => {
    return (
        <>
            {allData.slice(0, itemShow).map((data, index) => (
                <div className={`${colSize}`} key={index}>
                    <div className="testimonial-grid">
                        <span className="social-media">
                            <img src={process.env.PUBLIC_URL + data.from} alt="Yelp" />
                        </span>
                        <p>{data.description}</p>
                      
                    </div>
                </div>
            ))}
        </>
    )
}

export default TestimonialItem;