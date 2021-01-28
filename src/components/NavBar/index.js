import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                    JITB
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>Projects</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>Contact Me</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/contactme'>Contact Me</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    )
}

export default Navbar
