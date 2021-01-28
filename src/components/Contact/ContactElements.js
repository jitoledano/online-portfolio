import styled from 'styled-components';

export const ContactContainer = styled.div`
    height: 800px;
    background: black;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;


    @media screen and (maxx-width: 768px){
        height: 1000px;
    }

    @media screen and (max-width: 480px){
        height: 1300px
    }
`
export const SectionWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`

export const ContactCol1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`

export const ContactCol2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

`


export const ContactForm = styled.form`
    display: grid;
    grid-template-column: 1fr 1fr;
    grid-gap: 20px;
`

export const ContactWrapper = styled.div`
    grid-column: 1/3;
`

export const ContactInput = styled.input`
    border: 5px solid #01bf71; 
    padding: 1em; 
    width: 100%; 
`

export const ContactLabel = styled.label`
    display:block;
    color: #fff;
`

export const ContactMessage = styled.textarea`
    border: 5px solid #01bf71; 
    padding: 1em; 
    width: 100%; 
`

export const SubmitButton= styled.button`
    background: #E6343B;
    border: 0; 
    color: #fff; 
    padding: 1em; 
    text-transform: uppercase; 
    width: 100%;
    
    &:hover, &:focus {
        background: #B8161F;
        color: #fff; 
        outline: 0; 
        transition: background-color 2s ease-out;
        cursor: pointer; 
    }
`