import styled from 'styled-components';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
    justify-content: flex-end;
    
  }

`;
export const Div = styled.div`
  @media (max-width:  ${({theme})=> theme.screens.lg} ) {
    flex-direction :column ;
    width: 100%;
    max-height: ${({isOpen})=> (isOpen ? "400px" : "0")};
    overflow: hidden;
    transition: all .2s ease-in;

  }
`;


export const MenuLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
    width: 100%;
  }


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
