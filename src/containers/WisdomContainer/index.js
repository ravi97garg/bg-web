import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import RoundBtn from '../../components/RoundBtn';
import Input from '../../components/Input';
import bgEnglish from '../../assets/images/bg-english.png';
import wideBgEn from '../../assets/images/1606879754.png';
import wideBgHi from '../../assets/images/1606995529.png';
import certificate from '../../assets/images/certificate.jpg';
import meet from '../../assets/images/meet.jpg';
import fest from '../../assets/images/fest.png';
import COLORS from '../../constants/colors';
import motivation from '../../assets/images/josh-hild-jdTdvF6fDus-unsplash.jpg';
import { subscribe } from '../../services';
import './style.scss';

const LANGUAGES = {
    HINDI: 'hindi',
    ENGLISH: 'english',
}

class WisdomContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBook: LANGUAGES.HINDI,
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                whatsapp: '',
                dob: '',
                gender: 'MALE',
                address: '',
                city: '',
                pincode: '',
                book: 'Hindi Bhagavad Gita',
                screenshot: '',
                confirmation: false,
            },
            subscribeForm: {
                name: '',
                email: '',
                contact: '',
            }
        }
    }

    bookSelector = (lang) => {
        this.setState({
            selectedBook: lang,
        })
    }

    subscribe = () => {
        const {
            subscribeForm,
        } = this.state;
        if (subscribeForm && subscribeForm.name && subscribeForm.email && subscribeForm.contact) {
            subscribe({
                timeStamp: new Date(),
                ...subscribeForm,
            }).then((res) => {
                this.setState({
                    subscribeForm: {
                        name: '',
                        email: '',
                        contact: '',
                    }
                })
            }).catch(err => {
                console.log(err);
            })
        }
    }

    setFormData = (name, value) => {
        const {
            formData
        } = this.state;
        this.setState({
            formData: {
                ...formData,
                [name]: value
            }
        })
    }

    setSubscribeForm = (name, value) => {
        const {
            subscribeForm,
        } = this.state;
        this.setState({
            subscribeForm: {
                ...subscribeForm,
                [name]: value,
            }
        })
    }

    render() {
        const {
            selectedBook,
            subscribeForm: {
                name,
                email,
                contact,
            }
        } = this.state;

        return (
            <div className="wisdom-container">
                <Header navLinks={[
                    { label: 'What\'s included', path: '#included-section' },
                    { label: 'Motivation', path: '#motivation-section' },
                    { label: 'Pricing', path: '#pricing-section' },
                ]} />
                <Banner
                    color={COLORS.BLACK}
                    image="https://res.cloudinary.com/dnuq1lgqs/image/upload/v1607155865/bg/Rectangle_25_koobtz.jpg"
                    title="Wisdom Batch '21"
                />
                <div id="included-section">
                    <div className="heading bold">What's included?</div>
                    <div className="cards">
                        <div className="card left">
                            <img src={bgEnglish} />
                            <div className="text">
                                <p>We all face challenges and dilemmas in our life. Dilemma not just between what is wrong and what is right, but also what is right and the rightest. Our uncontrolled Mind tricks us presenting the former as good to go while leaving the latter one.</p>
                                <p>What did Krishna told Arjuna in <span className="bold">Bhagavad Gita</span>? How would Arjuna find out the distinction between right and the wrong? Would he have the courage to implement what he was told? Find out while reading this masterpiece!</p>
                            </div>
                        </div>
                        <div className="card right">
                            <img src={certificate} />
                            <div className="text">
                                <p>It is tough to grasp every single bit of this masterpiece knowledge about life. Don’t worry, we’ve got you covered with our <span className="bold">certified Life Manual Course</span>.</p>
                                <p>This Course would cover essential topics of Bhagavad Gita, and an instructor is provided to you, so that you can ask more practical questions and raise your doubts about life.</p>
                            </div>
                        </div>
                        <div className="card left">
                            <img src={fest} />
                            <div className="text">
                                <p>Who doesn’t like festivals? Yes, you’ve heard it right. We’re bringing second edition of <span className="bold">Mega Youth Fest</span> on January 2021. </p>
                                <p>This Fest would lift not just your wisdom, but your soul, mind and of course your body. The complete package of edutainment is back once again to be unravelled!</p>
                            </div>
                        </div>
                        <div className="card right">
                            <img src={meet} />
                            <div className="text">
                                <p>Continuous efforts are easily ensured with the help of a community. Our Community of 1000+ youths under the expert guidance of different leaders is here to help you make a change in the society.</p>
                                <p>Get <span className="bold">youth membership alongwith expert facilitation</span> which would provide practical tricks to overcome the bad and develop the good.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="motivation-section">
                    <div className="heading bold">Motivation</div>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/k1Ktre8WIe8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div id="pricing-section">
                    <div className="banner" style={{ background: `url(${motivation}) center center/cover no-repeat` }}>
                        <div className="motivation">
                            <p className="quote">
                                The best investment you can make is in yourself.
                            </p>
                            <p className="author">
                                WARREN BUFFET
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="heading bold">Pricing</div>
                        <div className="btn-group">
                            <RoundBtn
                                className="btn selector-btn"
                                onClick={() => this.bookSelector(LANGUAGES.HINDI)}
                                outlineColor={COLORS.YELLOW}
                                textColor={selectedBook === LANGUAGES.HINDI ? COLORS.WHITE : COLORS.YELLOW}
                                bgColor={selectedBook === LANGUAGES.HINDI ? COLORS.YELLOW : COLORS.WHITE}
                                hoverBgColor={COLORS.YELLOW}
                                hoverTextColor={COLORS.WHITE}
                                outlinePt={2}
                            >
                                Hindi
                            </RoundBtn>
                            <RoundBtn
                                className="btn selector-btn"
                                onClick={() => this.bookSelector(LANGUAGES.ENGLISH)}
                                outlineColor={COLORS.YELLOW}
                                textColor={selectedBook === LANGUAGES.ENGLISH ? COLORS.WHITE : COLORS.YELLOW}
                                bgColor={selectedBook === LANGUAGES.ENGLISH ? COLORS.YELLOW : COLORS.WHITE}
                                hoverBgColor={COLORS.YELLOW}
                                hoverTextColor={COLORS.WHITE}
                                outlinePt={2}
                            >
                                English
                            </RoundBtn>
                        </div>
                        <div className="price-info">
                            <img className="book-container" src={selectedBook === LANGUAGES.HINDI ? wideBgHi : wideBgEn} />
                            <div className="details">
                                <p>Bhagavad Gita worth ₹ {selectedBook === LANGUAGES.HINDI ? '199' : '220'} </p>
                                <p>+ Delivery Charges ₹ 50 </p>
                                <p>+ Mega Youth Fest ticket ₹ 149</p>
                                <p>+ Video courses and Life Mentorship</p>
                                <p className="cost">₹ {selectedBook === LANGUAGES.HINDI ? '190' : '220'}/-</p>
                                <a
                                    href={
                                        selectedBook === LANGUAGES.HINDI 
                                        ? 'https://www.payumoney.com/paybypayumoney/#/299B7BB3820BB7318ACF157A4ADF639B'
                                        : 'https://www.payumoney.com/paybypayumoney/#/1C8EA6A6EEC2F1BF7ADC6E38EA3D7CBF'
                                    }>
                                    <RoundBtn className="btn">
                                    {
                                        selectedBook === LANGUAGES.HINDI 
                                        ? 'Enroll with Hindi Gita'
                                        : 'Enroll with English Gita'
                                    }
                                    </RoundBtn>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div id="enroll-form">
                    <div className="heading bold">Enrollment Form</div>
                    <div className="form">
                        <Input
                            placeholder={'First Name'}
                            setValue={this.setFormData}
                            value={firstName}
                            name="firstName"
                            className="half input"
                            required
                        />
                        <Input
                            placeholder={'Last Name'}
                            setValue={this.setFormData}
                            value={lastName}
                            name="lastName"
                            className="half input"
                            required
                        />
                        <Input
                            placeholder={'Email'}
                            setValue={this.setFormData}
                            value={email}
                            name="email"
                            className="half input"
                            test={/\S+@\S+\.\S+/}
                            required
                        />
                        <Input
                            placeholder={'Whatsapp'}
                            setValue={this.setFormData}
                            value={whatsapp}
                            name="whatsapp"
                            className="half input"
                            required
                        />
                        <Input
                            placeholder={'Date of Birth'}
                            setValue={this.setFormData}
                            value={dob}
                            name="dob"
                            type="date"
                            className="half input"
                            required
                        />
                        <Input
                            placeholder={'Gender'}
                            setValue={this.setFormData}
                            value={gender}
                            name="gender"
                            type="select"
                            options={['MALE', 'FEMALE']}
                            className="half input"
                            required
                        />
                        <Input
                            placeholder={'Bhagavad Gita Shipping Address'}
                            setValue={this.setFormData}
                            value={address}
                            name="address"
                            className="full input"
                            required
                        />
                        <Input
                            placeholder={'City'}
                            setValue={this.setFormData}
                            value={city}
                            name="city"
                            className="half input"
                            required
                        />
                        <Input
                            placeholder={'Pincode'}
                            setValue={this.setFormData}
                            value={pincode}
                            name="pincode"
                            className="half input"
                            maxlength={6}
                            type={'number'}
                            required
                        />
                        <Input
                            setValue={this.setFormData}
                            value={book}
                            name="book"
                            options={[
                                'Hindi Bhagavad Gita',
                                'English Bhagavad Gita'
                            ]}
                            type="radio"
                            className="half input"
                            required
                        />
                        <p className="message">Please Pay <span className="bold">₹ {book === 'Hindi Bhagavad Gita' ? 190 : 220}</span> through Paytm/PhonePay/Google Pay at 9953522058 or UPI at ravi97garg@okicici for enrolling for the Batch. On verification, You would receive an email and further details.</p>
                        <button onClick={this.payNow}>
                            Pay Now
                        </button>
                    </div>
                </div> */}
                <div className="action-footer">
                    <div className="message">Get our updates delivered right into your Inbox</div>
                    <div className="subscribe-form">
                        <Input
                            placeholder={'Name'}
                            setValue={this.setSubscribeForm}
                            value={name}
                            name="name"
                            required
                        />
                        <Input
                            placeholder={'Email'}
                            setValue={this.setSubscribeForm}
                            value={email}
                            name="email"
                            test={/\S+@\S+\.\S+/}
                            required
                        />
                        <Input
                            placeholder={'Contact'}
                            setValue={this.setSubscribeForm}
                            value={contact}
                            name="contact"
                            maxlength={10}
                            type={'number'}
                            required
                        />
                        <button onClick={this.subscribe}>Subscribe</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WisdomContainer;