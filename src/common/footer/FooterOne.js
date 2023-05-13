import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedin, FaInstagram, FaVimeoV, FaDribbble, FaBehance, FaEnvelopeOpen } from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';
import Mailgun from 'mailgun-js';
import Alert from 'react-bootstrap/Alert';
const getServiceData = ServiceData;

const Result = () => {
    return (
      <Alert variant="success" className="success-msg">
        Your Message has been successfully sent.
      </Alert>
    );
  };
  
const FooterOne = ({parentClass}) => {

    const form = useRef();
  
    const [result, showresult] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      const mg = Mailgun({
        apiKey: 'key-e37bcedd9740a7db757a929851792bb7',
        domain: 'www.ricreates.com',
      });
  
      const data = {
        from: 'Ricreates <customercare@ricreates.com>',
        to: e.target.elements['contact-email'].value,
        subject: '🛠️ On-development Update',
        text: 'Greetings!\n\nThis is an automated email to inform you that our website is currently under development. We apologize for any inconvenience this may cause.\n\nWe will be sending out further updates to this email address as we make progress on the website. In the meantime, if you have any questions or feedback, please do not hesitate to contact us.\n\nThank you for your patience and understanding.\n\nSincerely,\n\nRicreates'
      };
  
      mg.messages().send(data, (error, body) => {
        if (error) {
          console.log(error);
        } else {
          console.log(body);
        }
      });
  
      form.current.reset();
      showresult(true);
    };
  
    setTimeout(() => {
      showresult(false);
    }, 5000);


    
    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><a href='https://facebook.com/ricreatesofficial'><FaFacebookF /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Get in touch!</h2>
                                    <p>Subscribe to our newsletter now for FREE to get the latest news and updates on our innovative technnologies</p>
                                    <form onSubmit={sendEmail} className="axil-contact-form" ref={form}>
                                        <div className="input-group">
                                            <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                            <input type="email" className="form-control" name="contact-email" placeholder="Email address" />
                                            <button className="subscribe-btn" type="submit">Subscribe</button>
                                            <div className="form-group">{result ? <Result /> : null}</div>

                                        </div>
                                    </form >
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link to={process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`}>{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Resources</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog</Link></li>
                                              </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                             </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="/about-us">Ricreates</a>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                           
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      
    )
}


export default FooterOne;