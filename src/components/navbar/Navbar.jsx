import Nav, {Logo, UL, LI, Span } from "./Navbar.styled"

const Navbar = () => {
  return (
    <>
    <Nav>
      <Logo>
        <i>{`<Savas/>`}</i>
        <Span>recipe</Span>
      </Logo>
      <div>
          <UL>
              <LI>ABOUT</LI>
              <LI>GITHUB</LI>
              <LI>LOGOUT</LI>
          </UL>
      </div>
    </Nav>

    </>
  )
}

export default Navbar