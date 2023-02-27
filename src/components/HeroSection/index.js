import React, {useState} from 'react';
import {Button} from '../ButtonElement'
import {
HeroContainer,
HeroBg,
ImgBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight
} from './HeroElements'

import Image from '../../images/BgImg1.jpg'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }

    return (
        <>
          <HeroContainer id={'home'}>
            <HeroBg>
                <ImgBg src={Image}>
                </ImgBg>
            </HeroBg>
            <HeroContent>
                <HeroH1> I am Jorge Isaac Toledano</HeroH1>
                <HeroP> A Cloud Security Engineer based in Denver, Colorado. Want to work with me?</HeroP>
                <HeroBtnWrapper>
                    <Button to='contact'
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true'
                     offset={-80} 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}>
                        Contact {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            </HeroContainer>  
        </>
    )
}

export default HeroSection
