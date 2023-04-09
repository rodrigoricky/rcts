import React from 'react';
import FormOne from '../contact/FormOne';


const AboutOne = () => {
    return (
        <section className="section section-padding-equal bg-color-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">About Us</span>
                                <h2 className="title mb--40">Digital solutions now made more affordable.</h2>
                                <p>Ricreates is an IT and software solutions company offering the best technological services for your business. We are a team of experienced professionals passionate about leveraging cutting-edge technology to help shops of all sizes across industries optimize operations, increase efficiency, and achieve goals. </p>
                                <p> We offer various services, including custom web, mobile apps, and software development. We pride ourselves on delivering tailored solutions that meet our client's unique needs while providing customer-centric support. Let us help you reach your business's full potential with our comprehensive solutions suite. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">Get a free Keystroke quote now</h3>
                           <FormOne />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="line" /></li>
            </ul>
        </section>
    )
}

export default AboutOne;