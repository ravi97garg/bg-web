import React from 'react';
import Header from '../../components/Header';
import bgEnglish from '../../assets/images/bg-english.png';
import COLORS from '../../constants/colors';
import QUOTES from '../../assets/data/quotes.json';
import TOPICS from '../../assets/data/topics.json';
import LEADERS from '../../assets/data/leaders.json';
import TESTIMONIALS from '../../assets/data/testimonials.json';
import RoundBtn from '../../components/RoundBtn';
import icon1 from '../../assets/images/job-interview.svg';
import icon2 from '../../assets/images/text.svg';
import icon3 from '../../assets/images/online-course.svg';
import icon4 from '../../assets/images/mentor.svg';
import icon5 from '../../assets/images/firework.svg';
import { ROUTE } from '../../constants';
import { subscribe } from '../../services';
import './style.scss';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: 0,
            currentSlug: TOPICS[0].slug,
            currentLeader: 0,
            currentTest: 0,
            subscribeForm: {
                name: '',
                email: '',
                contact: '',
            },
        }
        this.q_interval = '';
        this.l_interval = '';
        this.quoteRef = React.createRef();
    }

    componentDidMount() {
        this.q_interval = setInterval(() => {
            const {
                currentQuote,
                currentTest,
            } = this.state;
            this.setState({
                opacity: 0,
            }, () => {
                setTimeout(() => {
                    this.setState({
                        currentQuote: (currentQuote + 1) % (QUOTES.length),
                        currentTest: (currentTest + 1) % (TESTIMONIALS.length),
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                opacity: 1,
                            })
                        }, 1000);
                    })
                }, 2000);
            })
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.q_interval);
    }

    setCurrentSlug = (slug) => {
        this.setState({
            currentSlug: slug,
        });
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

    render() {
        const {
            opacity,
            currentQuote,
            currentSlug,
            currentTest,
            subscribeForm,
        } = this.state;
        const {
            history
        } = this.props;
        return (
            <React.Fragment>
                <Header navLinks={[
                    { label: 'Let\'s talk Practical', path: '#practical-section' },
                    { label: 'What Leaders say?', path: '#leader-section' },
                    { label: 'Wisdom Batch', path: '#wisdom-section' },
                    { label: 'Testimonials', path: '#testimonials' },
                ]} />
                <div className="home-container">
                    <div className="banner">
                        <div>
                            <div className="quote-container" style={{ opacity }}>
                                <p className="text">{QUOTES[currentQuote].text}</p>
                                <span className="author">{QUOTES[currentQuote].author}</span>
                            </div>
                            <div className="indicator">
                                {QUOTES.map((_, index) => <span
                                    className="bullet"
                                    style={{ color: `${index === currentQuote ? COLORS.WHITE : COLORS.GREY}` }}
                                >•</span>)}
                            </div>
                        </div>
                        <img className="bg-img" src={bgEnglish} />
                    </div>
                    <div id="practical-section">
                        <div className="heading">Let's talk <span className="bold">Practical</span></div>
                        <ul className="topic-container">
                            {
                                TOPICS.map(topic => (
                                    <li key={topic.slug} className="topic">
                                        <RoundBtn
                                            className="btn"
                                            hoverBgColor={COLORS.YELLOW}
                                            bgColor={topic.slug === currentSlug ? COLORS.YELLOW : COLORS.DARK}
                                            onClick={() => this.setCurrentSlug(topic.slug)}
                                        >
                                            {topic.label}
                                        </RoundBtn>
                                    </li>
                                ))
                            }
                        </ul>
                        <p className="intro">
                            {TOPICS.find(topic => topic.slug === currentSlug).intro}
                        </p>
                        <div className="btn-group">
                            <RoundBtn
                                className="btn"
                                hoverBgColor={COLORS.YELLOW}
                                bgColor={COLORS.DARK}
                                onClick={() => history.push(`/blog/${currentSlug}`)}
                                outlinePt={2}
                                outlineColor={COLORS.DARK}
                                hoverOutline={COLORS.YELLOW}
                            >
                                Read more about {TOPICS.find(topic => topic.slug === currentSlug).label}
                            </RoundBtn>
                            <RoundBtn
                                className="btn"
                                outlineColor={COLORS.DARK}
                                outlinePt={2}
                                hoverBgColor={COLORS.DARK}
                                bgColor={COLORS.WHITE}
                                textColor={COLORS.DARK}
                                hoverTextColor={COLORS.WHITE}
                                onClick={() => history.push(ROUTE.CONTACT_US)}
                            >
                                Speak up
                            </RoundBtn>
                        </div>
                    </div>
                    <div id="leader-section">
                        <div className="heading">
                            What <span className="bold">Leaders</span> say?
                        </div>
                        <div className="leader-container" style={{ opacity }}>
                            <img src={LEADERS[currentQuote].image} />
                            <div className="quote-container">
                                <p className="quote">{LEADERS[currentQuote].saying}</p>
                                <span className="author">{LEADERS[currentQuote].name}</span>
                                <span className="desig">{LEADERS[currentQuote].desig}</span>
                            </div>
                        </div>
                    </div>
                    <div id="wisdom-section">
                        <img className="banner" src="https://res.cloudinary.com/dnuq1lgqs/image/upload/v1607116475/bg/Screenshot_from_2020-12-02_14-57-05_1_tfbbsj.png" />
                        <div className="header">
                            <div className="heading">
                                <span className="bold">Wisdom Batch</span> '21
                            </div>
                            <div className="subheading">
                                Enroll to manage your life in a better sense!
                            </div>
                            <div className="quote">
                                “If they read all these books and if they are trained up in their character, then they will be, in future, first-class men.
                            </div>
                            <div className="author">Srila Prabhupada</div>
                        </div>
                        <div className="row-1">
                            <div className="card">
                                <div className="img-wrapper">
                                    <img src={icon1} />
                                </div>
                                <div className="text">
                                    Online Live Sessions
                                    on Life Challenges &amp;
                                    Practical Solutions
                                    from Bhagavad Gita
                                </div>
                            </div>
                            <div className="card">
                                <div className="img-wrapper">
                                    <img src={icon2} />
                                </div>
                                <div className="text">
                                    Regular articles
                                    on Life Building
                                </div>
                            </div>
                            <div className="card">
                                <div className="img-wrapper">
                                    <img src={icon3} />
                                </div>
                                <div className="text">
                                    Self paced
                                    Life Manual Course
                                </div>
                            </div>
                        </div>
                        <div className="row-2">
                            <div className="card">
                                <div className="img-wrapper">
                                    <img src={icon4} />
                                </div>
                                <div className="text">
                                    Individual
                                    life mentorship
                                </div>
                            </div>
                            <div className="card">
                                <div className="img-wrapper">
                                    <img src={icon5} />
                                </div>
                                <div className="text">
                                    Mega Youth Festival
                                    2021
                                </div>
                            </div>
                        </div>
                        <div className="btn-group">
                            <RoundBtn
                                className="btn"
                                hoverBgColor={COLORS.YELLOW}
                                bgColor={COLORS.DARK}
                                onClick={() => history.push(ROUTE.WISDOM_BATCH)}
                                outlinePt={2}
                                outlineColor={COLORS.DARK}
                                hoverOutline={COLORS.YELLOW}
                            >
                                Know more
                            </RoundBtn>
                            <RoundBtn
                                className="btn"
                                outlineColor={COLORS.DARK}
                                outlinePt={2}
                                hoverBgColor={COLORS.DARK}
                                bgColor={COLORS.WHITE}
                                textColor={COLORS.DARK}
                                hoverTextColor={COLORS.WHITE}
                                onClick={() => history.push(ROUTE.CONTACT_US)}
                            >
                                Send me quotes
                            </RoundBtn>
                        </div>
                    </div>
                    <div id="testimonials">
                        <div className="heading bold">Testimonials</div>
                        <div className="subheading">Transformations gone real!</div>
                        <div className="test-container" style={{ opacity }}>
                            <img src={TESTIMONIALS[currentTest].image} />
                            <div className="quote-container">
                                <p className="quote">{TESTIMONIALS[currentTest].saying}</p>
                                <span className="author">{TESTIMONIALS[currentTest].name}</span>
                                <span className="desig">{TESTIMONIALS[currentTest].desig}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action-footer">
                    <div className="message">Get our updates delivered right into your Inbox</div>
                    <div className="subscribe-form">
                        <input
                            placeholder="Name"
                            value={subscribeForm.name}
                            onChange={(e) => this.setState({
                                subscribeForm: {
                                    ...subscribeForm,
                                    name: e.target.value
                                }
                            })}
                        />
                        <input
                            placeholder="Email"
                            value={subscribeForm.email}
                            onChange={(e) => this.setState({
                                subscribeForm: {
                                    ...subscribeForm,
                                    email: e.target.value
                                }
                            })}
                        />
                        <input
                            placeholder="Contact"
                            value={subscribeForm.contact}
                            onChange={(e) => this.setState({
                                subscribeForm: {
                                    ...subscribeForm,
                                    contact: e.target.value
                                }
                            })}
                        />
                        <button onClick={this.subscribe}>Subscribe</button>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default HomeContainer;