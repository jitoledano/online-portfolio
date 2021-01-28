import styled from 'styled-components'

export const ProjectContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #003b23;

    @media screen and (max-width: 768px){
        height: auto;
    }

    @media screen and (max-width: 480px){
        height:auto;
    }
`

export const ProjectWrapper = styled.div`
    max-width: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: space-evenly;
    grid-gap: 16px;
    padding: 80px 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ProjectHeaderOne = styled.h1`
    font-size:3rem;
    color:#fff;
    margin-bottom: auto;
    margin-top: auto;


    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`



export const ProjectCards = styled.div`
    background: #464e4f;
    object-fit: cover;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height:auto;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
    }
`
export const ProjectTitle = styled.a`
    font-size:1.5rem;
    color: #01bf71;
    font-weight: bold;
    margin-bottom: 2px;
    text-decoration:none;
`

// export const ProjectImage= styled.img`
//     display: block;
//     height: 64px;
//     position: relative;
//     border-radius: 10px;
//     box-shadow: 0 1px 3px rgba(0,0,0,0.2);
//     line-height: 1.375;
//     bg-color: #fff;
// `

export const ProjectImage = styled.img`
    width: 20rem;
    height: auto;
    border-radius: 10px;

    @media screen and (max-width:480px){
        width: 10rem;
    }
    
`
export const ProjectDescription = styled.p`
    font-size: 1.2rem;
    color:#fff;
    margin-bottom: 2px;

    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`

export const ProjectGit = styled.a`
    font-size: 1rem;
    color:#1eaaeb;
    margin-bottom: 2px;
    text-decoration:none;
`