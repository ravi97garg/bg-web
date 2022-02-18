import React from 'react';
import Header from '../../components/Header';
import TOPICS from '../../assets/data/topics.json';
import './style.scss';
import Banner from '../../components/Banner';
import RoundBtn from '../../components/RoundBtn';
import COLORS from '../../constants/colors';
import { ROUTE } from '../../constants';
import { Link } from 'react-router-dom';

class BlogContainer extends React.Component {
    render() {
        const {
            match: {
                params: {
                    slug,
                }
            }
        } = this.props;
        const currentBlog = TOPICS.find(blog => blog.slug === slug) || TOPICS.find(blog => blog.slug === 'lost');
        return (
            <React.Fragment>
                <Header
                    bgColor={currentBlog.color}
                    navLinks={[
                        { label: 'Let\'s talk Practical', path: '#practical' }
                    ]} />
                <div className="blog-container">
                    <Banner
                        color={currentBlog.color}
                        image={currentBlog.image}
                        title={currentBlog.label}
                        subtitle={currentBlog.author}
                    />
                    <div className="blog">
                        {currentBlog.article.map(para => (
                            <p className="para">{para}</p>
                        ))}
                    </div>
                </div>
                <div className="action-footer">
                    <div className="message">Want to practice the Goodness?</div>
                    <div className="subscribe-form">
                        <RoundBtn
                            outlineColor={COLORS.YELLOW}
                            outlinePt={2}
                            hoverBgColor={COLORS.YELLOW}
                            hoverTextColor={COLORS.DARK}
                            onClick={() => this.props.history.push(ROUTE.WISDOM_BATCH)}>
                            Enroll to Wisdom Batch
                        </RoundBtn>
                        <Link className="what-is-wb" to={ROUTE.WISDOM_BATCH}>
                            What is Wisdom Batch?
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BlogContainer;