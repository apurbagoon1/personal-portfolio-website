import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div className="bg-[#0f172a] text-white font-sans">
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Hero></Hero>
                <About></About>
                <Skills></Skills>
                <Education></Education>
                <Projects></Projects>
            </main>
        </div>
    );
};

export default Home;