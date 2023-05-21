import React from 'react';
import FormOne from '../contact/FormOne';
import { slugify } from '../../utils';
import {useParams} from 'react-router-dom';
import ServiceData from '../../data/service/ServiceMain.json';

const allServiceData = ServiceData;

const AboutTwo = (service, wtd) => {

    const params = useParams();


    const serviceSlug = params.slug;

    const getServiceData = allServiceData.filter(data => slugify(data.title) === serviceSlug);
    const detailsService = getServiceData[0];

    return (
        <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Extensive Reach</span>
                                <h3 className="title">Why Ricreates?</h3>
                                <p>{detailsService.whatwedo}</p>
  
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
                            <h3 className="title">Send us a message</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;