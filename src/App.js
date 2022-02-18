import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import BlogContainer from './containers/BlogContainer';
import ContactUsContainer from './containers/ContactUsContainer';
import WisdomContainer from './containers/WisdomContainer';
import UmangContainer from './containers/UmangContainer';
import UmangRegListContainer from './containers/UmangRegListContainer';
import UmangVolunteerContainer from './containers/UmangVolunteerContainer';
import Footer from './components/Footer';
import { ROUTE } from './constants';
import './styles/main.scss';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path={ROUTE.HOME} component={HomeContainer} exact />
            <Route path={ROUTE.BLOG} component={BlogContainer} exact />
            <Route path={ROUTE.CONTACT_US} component={ContactUsContainer} exact />
            <Route path={ROUTE.WISDOM_BATCH} component={WisdomContainer} exact />
            <Route path={ROUTE.UMANG} component={UmangContainer} exact />
            <Route path={ROUTE.UMANG_LIST} component={UmangRegListContainer} exact />
            <Route path={ROUTE.UMANG_VOLUNTEER} component={UmangVolunteerContainer} exact />
            <Route render={() => {
              return <Redirect to={'/blog/lost'} />
            }} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default AppComponent;
