import React, { useRef, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Mailgun from 'mailgun-js';

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const FormTwo = () => {
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
    <form onSubmit={sendEmail} className="axil-contact-form" ref={form}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="contact-name" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="contact-email" required />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="tel" className="form-control" name="contact-phone" required />
      </div>
      <div className="form-group mb--40">
        <label>How can we help you?</label>
        <textarea className="form-control" name="contact-message" rows="4"></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">
          Get Pricing Now
        </button>
      </div>
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
};

export default FormTwo;