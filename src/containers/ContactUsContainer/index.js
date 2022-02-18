import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Input from '../../components/Input';
import RoundBtn from '../../components/RoundBtn';
import { message } from '../../services';
import './style.scss';


class ContactUsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            contact: '',
            message: ''
        };
    }

    setValue = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    send = () => {
        message(this.state).then(() => {
            console.log('message sent succesfully');
            this.setState({
                name: '',
                email: '',
                contact: '',
                message: '',
            })
        })
    }

    render() {
        const {
            name,
            email,
            contact,
            message,
        } = this.state;
        return (
            <div className="contact-container">
                <Header />
                <Banner
                    color="#365E7D"
                    image="https://res.cloudinary.com/dnuq1lgqs/image/upload/v1607155380/bg/Rectangle_44_ayb303.jpg"
                    title="We're listening!"
                />
                <div className="content">
                    {/* <div className="heading bold">Contact Us</div> */}
                    <Input
                        placeholder={'Name'}
                        setValue={this.setValue}
                        value={name}
                        name="name"
                        required
                    />
                    <Input
                        placeholder={'Email'}
                        setValue={this.setValue}
                        value={email}
                        name="email"
                        test={/\S+@\S+\.\S+/}
                        required
                    />
                    <Input
                        placeholder={'Contact'}
                        setValue={this.setValue}
                        value={contact}
                        name="contact"
                        maxlength={10}
                        type={'number'}
                        required
                    />
                    <textarea
                        name="message"
                        onChange={(e) => this.setValue('message', e.target.value)}
                        value={message}
                        placeholder="Message" />
                    <RoundBtn
                        onClick={this.send}
                    >Send</RoundBtn>
                </div>
            </div >
        )
    }
}

export default ContactUsContainer;