import Nav, {Logo, MenuLink, Span, Hamburger, Div } from "./Navbar.styled";
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
         
        <MenuLink to = "/">HOME</MenuLink>
        <MenuLink to = "about">ABOUT</MenuLink>
        <MenuLink to = "register">REGISTER</MenuLink>
        <MenuLink to = "login" onClick={() => sessionStorage.clear()}>LOGOUT</MenuLink>
       
      </Div>
    </Nav>

    </>
  )
}

export default Navbar