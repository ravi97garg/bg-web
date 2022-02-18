import React from 'react';
import './style.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.6031851377908!2d77.45069463463751!3d28.682340188566755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf199a672e86f%3A0x93b6a8443203ee20!2sISKCON%20Temple%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1607361543505!5m2!1sen!2sin" width="400" height="300" frameborder="0" style={{ border: '0' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <div className="content">
                    <div className="link-container">
                        <div className="links">
                            <a href="https://t.me/IYFGhaziabad" target="_blank">Connect to Krishna</a>
                            <a href="https://www.facebook.com/media/set/?vanity=IYFGhaziabad&set=a.128262368703002" target="_blank">Mega Youth Fest 2020</a>
                            <a href="https://udgaar.in/" target="_blank">UDGAAR Fest 2019</a>
                            <a href="/about" target="_blank">About Us</a>
                            <a href="/contact-us" target="_blank">Contact Us</a>
                            <a href="/privacy" target="_blank">Privacy Policy</a>
                        </div>
                        <div className="links">
                            <a href="https://www.facebook.com/IYFGhaziabad" target="_blank">Facebook</a>
                            <a href="https://t.me/IYFGhaziabad" target="_blank">Telegram</a>
                            <a href="https://chat.whatsapp.com/JTvafXN6Xto9cgFXdFGkzz" target="_blank">Whatsapp</a>
                            <a href="mailto:iskconyouthforumghaziabad@gmail.com" target="_blank">Email</a>
                        </div>
                    </div>
                    <div className="copyright">
                        &copy; ISKCON YOUTH FORUM GHAZIABAD 2020
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;