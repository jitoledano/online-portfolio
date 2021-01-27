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
                <HeroP> A React Developer based in Lakewood, Colorado. Want to work with me?</HeroP>
                <HeroBtnWrapper>
                    <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Contact {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            </HeroContainer>  
        </>
    )
}

export default HeroSection
