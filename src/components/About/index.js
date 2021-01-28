import React from 'react'
import { Button } from '../ButtonElement'
import {
AboutContainer,
AboutWrapper,
AboutRow,
Column1,
Column2,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
ImgWrap,
Img,
} from './AboutElements'

const About = ({lightBg, id, imgStart, topLine, headLine, description, lightText, darkText, buttonLable, img, alt, primary, dark}) => {
    return (
        <>
           <AboutContainer lightBg={lightBg} id={id}>
               <AboutWrapper>
                   <AboutRow imgStart={imgStart}>
                       <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='contact'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary}
                                    dark={dark}
                                    >{buttonLable}</Button>
                                </BtnWrap>
                            </TextWrapper>
                       </Column1>
                       <Column2>
                            <ImgWrap>
                            <Img src={img} alt={alt} />
                            </ImgWrap>
                       </Column2>
                   </AboutRow>
               </AboutWrapper>
           </AboutContainer> 
        </>
    )
}

export default About;
