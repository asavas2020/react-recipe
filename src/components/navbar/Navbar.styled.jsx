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
`;


export const Span = styled(Logo)`
  color: #00daf2;
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
`;


export default Nav;
