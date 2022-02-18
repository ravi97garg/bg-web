import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/iyf-logo.png';
import { ROUTE } from '../../constants';
import './style.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nightify: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollToElement);
        this.handleScrollToElement();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollToElement);
    }

    handleScrollToElement = () => {
        const {
            nightify
        } = this.state;
        const banner = document.getElementById('banner-container');
        const bannerHeight = (banner && banner.offsetHeight) || 0;
        if (window.scrollY > bannerHeight && !nightify) {
            this.setState({
                nightify: true
            })
        } else if (window.scrollY <= bannerHeight && nightify) {
            this.setState({
                nightify: false,
            })
        }
    };

    render() {
        const {
            nightify,
        } = this.state;
        const {
            bgColor,
            navLinks,
        } = this.props;
        return (
            <div className={`header-container ${nightify ? 'nightify' : ''}`}
                style={{ backgroundColor: bgColor }}
            >
                <Link to={ROUTE.HOME}><img className="logo" src={logo} /></Link>
                <ul className="nav-bar">
                    {
                        navLinks.map((link) => (
                            <li><a href={link.path}>{link.label}</a></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

Header.propTypes = {
    navLinks: PropTypes.array
};

Header.defaultProps = {
    navLinks: [
        { label: 'Let\'s talk Practical', path: `${window.location.origin}#practical-section` },
        { label: 'What Leaders say?', path: `${window.location.origin}#leader-section` },
        { label: 'Wisdom Batch', path: `${window.location.origin}#wisdom-section` },
        { label: 'Testimonials', path: `${window.location.origin}#testimonials` },
    ]
}

export default Header;