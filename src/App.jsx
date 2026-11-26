import React, { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Facilities from './components/Facilities';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Membership from './components/Membership';
import FAQ from './components/FAQ';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState('');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0A0B0C] text-[#F5F5F0]">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Facilities />
          <Programs onSelectProgram={setSelectedProgram} />
          <Gallery />
          <Testimonials />
          <Membership preselectedGoal={selectedProgram} />
          <FAQ />
          <Location />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

