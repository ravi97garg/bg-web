import React from 'react';
import './style.scss';

class Banner extends React.Component {
    render() {
        const {
            color,
            image,
            title,
            subtitle,
        } = this.props;
        return (
            <div className="banner-container" style={{
                background: `linear-gradient(0deg, ${color}aa 70%, ${color}aa 70%), url(${image}) center center/cover no-repeat`
            }}>
                <div className="text">
                    <div className="title">{title}</div>
                    <div className="author">{subtitle}</div>
                </div>
            </div>
        )
    }
}

export default Banner;