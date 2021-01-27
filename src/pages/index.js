import React, {useState} from 'react';
import About from '../About';
import { homeObjOne } from '../About/Data';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/NavBar';
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
        </>
    )
}

export default Home
