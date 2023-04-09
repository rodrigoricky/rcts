import React from 'react';
import FormOne from '../contact/FormOne';


const AboutTwo = () => {
    return (
        <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Extensive Reach</span>
                                <h3 className="title">Why Ricreates?</h3>
                                <p>Increase productivity, streamline operations, and manage daily business operations and tasks more efficiently. These apps can help business owners organize schedules, manage projects, collaborate with team members, automate time-consuming tasks, and focus on growing their business on desktop computers or mobile devices. These are designed to help users manage their workloads more effectively. </p>
                                <p> Business and productivity apps can be game-changers to increase productivity and streamline daily tasks. With many different types of apps available, creating the right ones for your needs can be challenging. Working with an experienced technical team that can guide you through building and implementing the right apps for your business is essential. You can ensure that you are using the most useful apps to help you manage your business and achieve your goals. </p>
                            </div>
                           {/* <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaCompress /> Strategy</Accordion.Header>
                                    <Accordion.Body>
                                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaCode /> Design</Accordion.Header>
                                    <Accordion.Body>
                                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                                    <Accordion.Body>
                                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion> */}
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Get a free Keystroke quote now</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;