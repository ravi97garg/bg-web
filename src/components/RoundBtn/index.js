import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../constants/colors';
import './style.scss';

class RoundBtn extends React.Component {
    constructor(props) {
        super(props);
        const {
            textColor,
            bgColor,
            hoverBgColor,
            hoverTextColor,
            outlineColor,
            outlinePt,
        } = this.props;
        this.state = {
            textColor,
            bgColor,
            outlineColor,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            bgColor,
            textColor,
        } = this.props;
        if (prevProps.bgColor !== bgColor || prevProps.textColor !== textColor) {
            this.setState({
                bgColor,
                textColor
            })
        }
    }

    onMouseEnter = () => {
        const {
            hoverTextColor,
            hoverBgColor,
            hoverOutline,
        } = this.props;
        const changed = {};
        if (hoverBgColor) {
            changed.bgColor = hoverBgColor;
        }
        if (hoverTextColor) {
            changed.textColor = hoverTextColor;
        }
        if (hoverOutline) {
            changed.outlineColor = hoverOutline;
        }
        this.setState(changed);
    }

    onMouseLeave = () => {
        const {
            textColor,
            bgColor,
            outlineColor,
        } = this.props;
        this.setState({
            textColor,
            bgColor,
            outlineColor,
        });
    }

    render() {
        const {
            className,
            children,
            outlinePt,
            onClick,
            disabled,
        } = this.props;
        const {
            bgColor,
            textColor,
            outlineColor,
        } = this.state;
        return (
            <button
                onClick={onClick}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                className={`${className} round-btn`}
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    border: `${outlinePt}px solid ${outlineColor}`
                }}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }
}

RoundBtn.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    hoverBgColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
    outlineColor: PropTypes.string,
    outlinePt: PropTypes.number,
}

RoundBtn.defaultProps = {
    className: '',
    children: null,
    textColor: COLORS.WHITE,
    bgColor: COLORS.DARK,
    hoverBgColor: '',
    hoverTextColor: '',
    outlineColor: COLORS.DARK,
    outlinePt: 0,
}

export default RoundBtn;