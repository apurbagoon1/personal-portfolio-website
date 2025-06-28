import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';

const Home = () => {
    return (
        <div className="bg-[#0f172a] text-white font-sans">
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Hero></Hero>
            </main>
        </div>
    );
};

export default Home;