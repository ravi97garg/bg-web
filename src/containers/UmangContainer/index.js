import React from 'react';
import RoundBtn from '../../components/RoundBtn';
import './style.scss';

class UmangContainer extends React.Component {
    render() {
        return (
            <div className="umang-landing-page">
                <div className="banner">
                    {/* <iframe id="video_background_video_0_yt" allowFullScreen="allowfullscreen" width="1284" height="723" src="https://www.youtube.com/embed/9a5a4n54gJU?enablejsapi=1&amp;loop=1&amp;start=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0&amp;wmode=transparent&amp;iv_load_policy=3&amp;modestbranding=1&amp;rel=0&amp;mute=1&amp;playlist=9a5a4n54gJU" frameBorder="0" ></iframe> */}
                    <video className="umang-bg-video" autoPlay muted width="100%" loop>
                        <source src={'https://res.cloudinary.com/dnuq1lgqs/video/upload/v1610357653/Umang_y3rb3k.mp4'} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <div className="banner-overlay">
                        <div className="title">UMANG</div>
                        <div className="line-1">Festival of Goodness and Joy</div>
                        <div className="line-2">26 January 2021 / ISKCON GHAZIABAD / 3 PM ONWARDS</div>
                        <a href="https://www.payumoney.com/events/#/buyTickets/umang"
                            target="_blank">
                            <RoundBtn
                                bgColor="#FFFFFF"
                                textColor="#222222"
                            >
                                REGISTER NOW
                            </RoundBtn>
                        </a>
                    </div>
                </div>
                <div className="about-container">
                    <div className="about-1">
                        <div className="title">
                            About the Fest
                        </div>
                        <div className="desc">
                            <p>UMANG - A Festival of inspiration and Joy is a Youth Festival conducted regularly by ISKCON Youth Forum all over India. This festival provides a platform for the Spiritually inclined Youth to assemble at a common ground.</p>
                            <p>The festival is surcharged with spiritual energy which manifests in the form of Excellent Ecstatic Mantra Rock, Wonderful Play, Powerful Thought Provoking Seminar.</p>
                        </div>
                    </div>
                    <div className="about-2">
                        <div className="details">
                            <div className="heading">THEME</div>
                            <div className="detail">Restoring the Glories of India</div>
                            <div className="heading">WHERE</div>
                            <div className="detail"><a href="https://goo.gl/maps/VRvoocp5mfuYDFKD8" target="_blank">ISKCON GHAZIABAD</a></div>
                            <div className="heading">WHEN</div>
                            <div className="detail">Republic Day, 26th January 2021</div>
                        </div>
                        <div className="poster">
                            <img src="https://res.cloudinary.com/dnuq1lgqs/image/upload/v1610361682/UMANG_izkbiv.jpg" />
                        </div>
                    </div>
                </div>
                <div className="event-container">
                    <div className="title">Events.</div>
                    <div className="event-cards">
                        <div className="card" style={{
                            background: `linear-gradient(180deg, #1d2152aa 80%, #1d2152aa 80%) no-repeat, url('https://iyfdelhi.com/umang/wp-content/uploads/2020/07/Seminar.jpg') center center/cover no-repeat`
                        }}>
                            <div className="detail">
                                <div className="heading">Enlightening Talk</div>
                                <div className="desc-1">HG Sundar Gopal Das</div>
                                <div className="desc-2">Director, ISKCON Youth Forum</div>
                                <div className="desc-2">M. Tech. IIT Delhi</div>
                            </div>
                        </div>
                        <div className="card" style={{
                            background: `linear-gradient(180deg, #1d2152aa 80%, #1d2152aa 80%) no-repeat, url('https://res.cloudinary.com/dnuq1lgqs/image/upload/v1610436595/couple-winning-prize-man-woman-holding-gift-box-flat-vector-illustration-lottery-present-birthday-party_74855-8307_hl29hl.jpg') center center/cover no-repeat`
                        }}>
                            <div className="detail">
                                <div className="heading">Talent Hunt</div>
                                <div className="desc-2">Submit your Talent Hunt Entry</div>
                                <div className="desc-2">and Win Exciting Prizes</div>
                            </div>
                        </div>
                        <div className="card" style={{
                            background: `linear-gradient(180deg, #1d2152aa 80%, #1d2152aa 80%) no-repeat, url('https://iyfdelhi.com/umang/wp-content/uploads/2020/07/Drama.jpg') center center/cover no-repeat`
                        }}>
                            <div className="detail">
                                <div className="heading">Thetrical Performance</div>
                                <div className="desc-2">Me and My Mind</div>
                            </div>
                        </div>
                        <div className="card" style={{
                            background: `linear-gradient(180deg, #1d2152aa 80%, #1d2152aa 80%) no-repeat, url('https://res.cloudinary.com/dnuq1lgqs/image/upload/v1610437180/headway-5QgIuuBxKwM-unsplash_1_dl1n31.jpg') center center/cover no-repeat`
                        }}>
                            <div className="detail">
                                <div className="heading">Panel Discussion</div>
                                <div className="desc-2">Glories of INDIA</div>
                            </div>
                        </div>
                        <div className="card" style={{
                            background: `linear-gradient(180deg, #1d2152aa 80%, #1d2152aa 80%) no-repeat, url('https://iyfdelhi.com/umang/wp-content/uploads/2020/07/Rock-Kirtan.jpg') center center/cover no-repeat`
                        }}>
                            <div className="detail">
                                <div className="heading">Mantra Rock Dance</div>
                                <div className="desc-2">Mesmerize yourself in Melodious Chants</div>
                            </div>
                        </div>
                        <div className="card" style={{
                            background: `linear-gradient(180deg, #1d2152aa 80%, #1d2152aa 80%) no-repeat, url('https://iyfdelhi.com/umang/wp-content/uploads/2020/07/Rock-Show.jpg') center center/cover no-repeat`
                        }}>
                            <div className="detail">
                                <div className="heading">Lots of Fun</div>
                                <div className="desc-2">Music! Dance! FOOD!!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fest-details">
                    <div className="part">
                        <div className="up-title">THEME</div>
                        <div className="title">
                            Restoring the Glories of India
                        </div>
                        <p className="para">
                            Once titled Golden Bird, Vishwa Guru, India has now come way ahead only to realize that the paradise is lost. The countless glories that embellished Indian historical era are now a part of textbooks only. Let us become instrumental in excavating and reviving the lost grandeur of our ancient tradition. Let us discover, understand, preserve and promote the glories of Vedic Culture.
                        </p>
                    </div>
                    <div className="part poster">
                        <img src="https://iyfdelhi.com/umang/wp-content/uploads/2020/10/Confuse.jpg" />
                    </div>
                </div>
                <div className="action-container">
                    <div className="plate-1">
                        <div className="title">Grab your ticket now!</div>
                        <p className="grey">Dont miss this Great oppurtunity unless you will miss yourself.</p>
                        <p className="grey">Registration ends on 01st November 2020.</p>
                        <p className="red">Hurry! Limited Seats!</p>
                    </div>
                    <div className="plate-2">
                        <div className="heading">Full Access</div>
                        <div className="price">₹100/-</div>
                        <ul className="features">
                            <li>Seminar</li>
                            <li>Debate</li>
                            <li>Talent Hunt</li>
                            <li>Mantra Rock Show</li>
                            <li>Theatre</li>
                            <li>Dinner Buffet</li>
                        </ul>
                        <a href="https://www.payumoney.com/events/#/buyTickets/umang"
                            target="_blank"
                            className="purchase">
                            <button>
                                Purchase Ticket
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default UmangContainer;