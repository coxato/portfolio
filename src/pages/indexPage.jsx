import React from 'react';
// components
import Nav from '../components/Nav/nav';
import Hero from '../components/Hero/hero';
import About from '../components/About/about';
import Skills from '../components/Skills/skills';
import Portfolio from '../components/Portfolio/portfolio';

const IndexPage = () => {

    return (
        <div className="page-container">
            <Nav />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
        </div>
    );
}
 
export default IndexPage;