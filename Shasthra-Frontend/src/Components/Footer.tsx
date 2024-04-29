import React from 'react';
import "../Styles/Footer.css";

import {
  FaFacebookF,
  FaLinkedin,
  FaRegArrowAltCircleRight,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const companyLinks = [
    { label: 'About Us', icon: FaRegArrowAltCircleRight, Link: 'about' },
    { label: 'Contact Us', icon: FaRegArrowAltCircleRight, Link: 'contact' },
    { label: 'Reservation', icon: FaRegArrowAltCircleRight, Link: 'contact' },
    { label: 'Privacy Policy', icon: FaRegArrowAltCircleRight, Link: '' },
    { label: 'Terms & Condition', icon: FaRegArrowAltCircleRight, Link: '' },
  ];

  const contactInfo = [
    { icon: 'fa-map-marker-alt', text: '248\\5 Kirillawala Weboda' },
    { icon: 'fa-phone-alt', text: '+94 71 1606520' },
    { icon: 'fa-envelope', text: 'mjpavithra6520@gmail.com' },
  ];

  const socialLinks = [
    { icon: FaTwitter, scale: 1.3, link :'https://twitter.com/ManojPavithra2'},
    { icon: FaFacebookF, scale: 1.3 , link:'https://www.facebook.com/profile.php?id=100009353467976'},
    { icon: FaYoutube, size: 40, scale: 1.3, link: 'https://www.youtube.com/@mjpavithra7710'},
    { icon: FaLinkedin, scale: 1.3, link:'https://www.linkedin.com/in/manoj-pavithra/' },
  ];

  const openingHours = [
    { day: 'Monday - Saturday', time: '09AM - 09PM' },
    { day: 'Sunday', time: '10AM - 08PM' },
  ];

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-company">
            <h4 className="footer-title">Company</h4>
            <div className='fotter-link-list'>
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  className="footer-link"
                  href={link.Link}
                >
                {React.createElement(link.icon)}
                {link.label}
                </a>
              ))}
            </div>
              
          </div>
          
        </div>
        <div className='fotter-availability'>
              <div className="footer-contact">
              <h4 className="footer-title">Contact</h4>
              {contactInfo.map((info, index) => (
                <p key={index} className="footer-info">
                  <i className="footer-icon" />
                  {info.text}
                </p>
              ))}
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    className="footer-social-link"
                    href={social.link}
                  >
                    {React.createElement(social.icon, {
                      className: 'footer-social-icon'
                    })}
                  </a>
                ))}
              </div>
            </div>
           
            
      </div>
      <div className="footer-legal">
          <div className="footer-newsletter">
            <h4 className="footer-title">Newsletter</h4>
            <p className="footer-newsletter-text">
              Uda palagaththtath wattakka bima palagaththat wattakka..
            </p>
            <div className="footer-newsletter-form" style={{ maxWidth: 400 }}>
              <input
                className="footer-input"
                type="text"
                placeholder="Your email"
              />
              <button
                className="footer-button"
                type="button"
              >
                SignUp
              </button>
            </div>
          </div>
          <div className="footer-3rd">
            <div className='footer-copyright'>
              ©{' '}
              <a className="footer-site-link" href="#">
                My Week
              </a>
              , All Right Reserved.
            </div>
            <div className="footer-menu">
              <a className="footer-menu-link" href="">Home</a>
              <a className="footer-menu-link" href="">Cookies</a>
              <a className="footer-menu-link" href="">Help</a>
              <a className="footer-menu-link" href="">FQAs</a>
            </div>
          </div>
          
      </div>
    </div>
  </div>
  
  
  );
};

export default Footer;