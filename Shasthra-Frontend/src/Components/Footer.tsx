import React from 'react';
import "../Styles/Footer.css";
import {
    FaFacebookF,
    FaLinkedin,
    FaRegArrowAltCircleRight,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';

// Define types for company links, contact info, social links, and opening hours
interface CompanyLink {
    label: string;
    icon: React.ElementType;
    link: string;
}

interface ContactInfo {
    icon: string;
    text: string;
}

interface SocialLink {
    icon: React.ElementType;
    scale: number;
    link: string;
}

interface OpeningHours {
    day: string;
    time: string;
}

const Footer: React.FC = () => {
    // Define data for company links
    const companyLinks: CompanyLink[] = [
        { label: 'About Us', icon: FaRegArrowAltCircleRight, link: 'about' },
        { label: 'Contact Us', icon: FaRegArrowAltCircleRight, link: 'contact' },
        { label: 'Reservation', icon: FaRegArrowAltCircleRight, link: 'contact' },
        { label: 'Privacy Policy', icon: FaRegArrowAltCircleRight, link: '' },
        { label: 'Terms & Condition', icon: FaRegArrowAltCircleRight, link: '' },
    ];

    // Define data for contact info
    const contactInfo: ContactInfo[] = [
        { icon: 'fa-map-marker-alt', text: '248/5 Kirillawala Weboda' },
        { icon: 'fa-phone-alt', text: '+94 71 1606520' },
        { icon: 'fa-envelope', text: 'mjpavithra6520@gmail.com' },
    ];

    // Define data for social links
    const socialLinks: SocialLink[] = [
        { icon: FaTwitter, scale: 1.3, link: 'https://twitter.com/ManojPavithra2' },
        { icon: FaFacebookF, scale: 1.3, link: 'https://www.facebook.com/profile.php?id=100009353467976' },
        { icon: FaYoutube, scale: 1.3, link: 'https://www.youtube.com/@mjpavithra7710' },
        { icon: FaLinkedin, scale: 1.3, link: 'https://www.linkedin.com/in/manoj-pavithra/' },
    ];

    // Define data for opening hours
    const openingHours: OpeningHours[] = [
        { day: 'Monday - Saturday', time: '09AM - 09PM' },
        { day: 'Sunday', time: '10AM - 08PM' },
    ];

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-company">
                        <h4 className="footer-title">Company</h4>
                        <div className="footer-link-list">
                            {companyLinks.map((link, index) => (
                                <a key={index} className="footer-link" href={link.link}>
                                    {React.createElement(link.icon)}
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-availability">
                    <div className="footer-contact">
                        <h4 className="footer-title">Contact</h4>
                        {contactInfo.map((info, index) => (
                            <p key={index} className="footer-info">
                                <i className={`footer-icon ${info.icon}`} />
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
                                        className: 'footer-social-icon',
                                        style: { transform: `scale(${social.scale})` },
                                    })}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="footer-legal">
                        <div className="footer-newsletter">
                            <h4 className="footer-title">Newsletter</h4>
                            <p className="footer-newsletter-text">
                                Uda palagaththtath wattakka bima palagaththat wattakka.
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
                                <a className="footer-menu-link" href="">
                                    Home
                                </a>
                                <a className="footer-menu-link" href="">
                                    Cookies
                                </a>
                                <a className="footer-menu-link" href="">
                                    Help
                                </a>
                                <a className="footer-menu-link" href="">
                                    FAQs
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
