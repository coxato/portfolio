import React from 'react';
// components
import Nav from '../components/Nav/nav';
import Hero from '../components/Hero/hero';
import About from '../components/About/about';
import Skills from '../components/Skills/skills';

const IndexPage = () => {

    return (
        <div className="page-container">
            <Nav />
            <Hero />
            <About />
            <Skills />
        </div>
    );
}
 
export default IndexPage;