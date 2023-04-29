import React from 'react';


const TestimonialItem = ({colSize, itemShow, testimonialData, layoutStyle}) => {
    return (
        <>
            {testimonialData.slice(0, itemShow).map((data, index) => (
                <div className={`${colSize}`} key={index}>
                <div className={`testimonial-grid ${layoutStyle ? layoutStyle : ""}`}>
                    <span className="social-media">{data.fromtext}</span>
                    <p>{data.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TestimonialItem;