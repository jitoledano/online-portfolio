import React from 'react';
import {SocialIcon} from 'react-social-icons';
import{FooterContainer, FooterWrapper} from './FooterElements';


const Footer = () => {
    return (
        <>
           <FooterContainer>
               <FooterWrapper>
                    <SocialIcon url="https://github.com/jitoledano" target="_blank"/>
                    <SocialIcon url="https://www.linkedin.com/in/jitb1998/" target="_blank"/>
                    <SocialIcon url="https://twitter.com/JorgeIsaacToled" target="_blank" />
               </FooterWrapper>
           </FooterContainer> 
        </>
    )
}

export default Footer
