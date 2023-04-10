import styled from "styled-components";


export const NavBarStyles = styled.nav`
  width: 100vw;
  height: 90px;
  position: fixed;
  background-color: black;
  display: flex;
  padding: 0 2rem;
  
  .logo{
    width: 210px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      width: 200px;
    }
  }
`;