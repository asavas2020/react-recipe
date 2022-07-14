import styled from 'styled-components';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #deebe8;
  padding: 1rem;
`;


export const Logo = styled.a`
 background-color: #deebe8;
 cursor: pointer;
 font-size :1.5rem ;
 font-weight: 500;
 transition: all .2s ease-in;
  &:hover{
    color: ${({theme})=> theme.colors.mainColor};
  }
`;


export const Span = styled(Logo)`
  color: #00daf2;
  transition: all .2s ease-in;
  &:hover{
    color: ${({theme})=> theme.colors.mainColor};
  }
`;



export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({theme})=> theme.colors.mainColor};
  @media (max-width:  ${({theme})=> theme.screens.lg} ) { display: block;
    
  }

`;
export const Div = styled.div`
  /* display: none; */
  cursor: pointer;
  color: ${({theme})=> theme.colors.mainColor};
  @media (max-width:  ${({theme})=> theme.screens.lg} ) { display: block;
    max-height: ${({isOpen})=> (isOpen ? "400px" : "0")}; 
  }

`;


export const UL = styled.ul`
  display: flex;


`;


export const LI = styled.li`
  margin-right: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  list-style-type  :none ;
  cursor: pointer;
  transition: all .2s ease-in;
  &:hover{
    color: ${({theme})=> theme.colors.mainColor};
  }
`;


export default Nav;
