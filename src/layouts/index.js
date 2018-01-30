import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './normalize.css';
import './skeleton.css';
import './skeleton-overwrite.css';
import './index.css';

class Header extends React.Component {
  state = {
    showMobileMenu: false
  };

  toggleMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  }

  hideMenu = () => {
    this.setState({
      showMobileMenu: false
    });
  }

  render() {
    const { showMobileMenu } = this.state;

    return (
      <section className="header">
        <Link to="/">
          <img src="wac-logo.svg" alt="Web Audio Conf logo" className="header__logo" />
        </Link>
        <button
          className="header__navigationTrigger"
          onClick={this.toggleMenu}
        >
          ☰
        </button>
        <ul
          className={`header__navigation ${showMobileMenu ? 'm-visible' : 'm-hidden'}`}
          onClick={this.hideMenu}
        >
          <li className="header__navigationItem">
            <Link
              to="/"
              exact
              className="header__navigationLink"
              activeClassName="m-active"
            >
              Home
            </Link>
          </li>
          <li className="header__navigationItem">
            <Link
              to="/call-for-submissions"
              className="header__navigationLink"
              activeClassName="m-active"
            >
              Call for Submissions
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Web Audio Conference 2018 | Berlin"
      meta={[
        { name: 'description', content: '4th annual web audio conference at the technical university of Berlin.' },
        { name: 'keywords', content: 'wac, web audio conference, conference, berlin, javascript, web, audio, web audio' },
      ]}
    />
    <div className="container">
      <Header />
    </div>
    <div className="container">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
