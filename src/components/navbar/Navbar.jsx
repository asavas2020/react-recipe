import Nav, {Logo, UL, LI, Span, Hamburger, Div } from "./Navbar.styled";
// import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Nav>
      <Logo to="/">
        <i>{`<Savas/>`}</i>
        <Span>recipe</Span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu/>
      </Hamburger>
      <Div isOpen ={isOpen} onClick = {()=> setIsOpen(true)}>
          <UL>
              <LI to = "/">HOME</LI>
              <LI to = "about">ABOUT</LI>
              <LI to = "register">REGISTER</LI>
              <LI to = "login" onClick={() => sessionStorage.clear()}>LOGOUT</LI>
          </UL>
      </Div>
    </Nav>

    </>
  )
}

export default Navbar