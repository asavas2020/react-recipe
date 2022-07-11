import Nav, { Button, UL, LI } from "./Navbar.styled"

const Navbar = () => {
  return (
    <>
    <Nav>
        <Button>
            ED8EN/ RECIPE
        </Button>
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