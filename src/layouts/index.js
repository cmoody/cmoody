import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Lead from '../components/Lead';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import './font-awesome.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Chase Moody | Portfolio"
      meta={[
        { name: 'description', content: 'I am a full-stack software engineer specializing in JavaScript.' },
        { name: 'keywords', content: 'JavaScript, Nodejs, React, React Native, GraphQL, REST, Cordova, HTML, CSS, Git, Solidity, Web3' },
      ]}
    />
    <Header/>
    <Lead/>
    <About/>
    <Experience/>
    <Education/>
    {/* <Projects/> */}
    <Skills/>
    {/* <Contact/> */}
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
