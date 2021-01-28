import React, {useState} from 'react';
import About from '../components/About';
import { homeObjOne } from '../components/About/Data';
import Contact from '../components/Contact';
import { contactObj } from '../components/Contact/Data';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/NavBar';
import Projects from '../components/Projects';
import SideBar from '../components/SideBar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>  
            <Navbar toggle={toggle}/>
            <HeroSection />
            <About { ...homeObjOne }/>
            <Projects />
            <Contact { ... contactObj} />
            <Footer />
        </>
    )
}

export default Home
