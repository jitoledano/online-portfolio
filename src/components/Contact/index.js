import React from 'react'
import emailjs from 'emailjs-com'
import {
ContactContainer,
ContactForm,
ContactWrapper,
ContactLabel,
ContactInput,
ContactMessage,
SectionWrapper,
ContactRow,
ContactCol1,
ContactCol2,
SubmitButton} from './ContactElements'
import{
    TextWrapper,
    TopLine,
    Heading,
    Subtitle
} from '../About/AboutElements'

const Contact = ({id, topLine, headLine, description, lightText, darkText}) => {
    
    function sendEmail(e){
         e.preventDefault();

    emailjs.sendForm('service_g6f8utl', 'template_vudg5aj', e.target, 'user_SLzb3pRvcIkVWDUUR5iy1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    
    return (
        <>
            <ContactContainer id={id}>
                <SectionWrapper>
                    <ContactRow>
                        <ContactCol1>
                        <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </ContactCol1>
                        <ContactCol2>
                            <ContactForm onSubmit={sendEmail}>
                                <ContactWrapper>
                                    <ContactLabel>Name</ContactLabel>
                                    <ContactInput type="text" name="name" />
                                </ContactWrapper>
                                <ContactWrapper>
                                    <ContactLabel>Email</ContactLabel>
                                    <ContactInput type="email" name="email"></ContactInput>
                                </ContactWrapper>
                                <ContactWrapper full>
                                    <ContactLabel>Message</ContactLabel>
                                    <ContactMessage name="message" rows="5"/>
                                </ContactWrapper>
                                <ContactWrapper>
                                    <SubmitButton>Submit</SubmitButton>
                                </ContactWrapper>
                            </ContactForm>
                        </ContactCol2>
                    </ContactRow>
                </SectionWrapper>
            </ContactContainer>            
        </>
    )
}

export default Contact
