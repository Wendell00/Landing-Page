import styled from "styled-components";


export const NavBarStyles = styled.nav`
  .navContainer{
    width: 100vw;
    height: 90px;
    position: fixed;
    background-color: transparent;
    display: flex;
    padding: 0 2rem;
    
    .p1{
      width: 70%;
      height: 100%;
      display: flex;

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
    
      .anchorList{
        margin-left: 50px;
        height: 100%;
        width: 500px;
        display: flex;
    
        ul{
          width: 100%;
          height: 100%;
          list-style: none;
          list-style-type: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-around;
  
          li{
            font-weight: 300;
            font-size: 1em;
            cursor: pointer;
        
            :hover{
              color: #04adee;
            }
          }
        }
      }
    }
    

    .socialMedia{
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;

      ul{
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;
        list-style-type: none;

        li{
          height: 100%;

          img{
            height: 100%;
            border-radius: 50px;
            cursor: pointer;
          }
        }
      }
    }
  }

  .navbar-scrolled{
    background-color: black;
  }
  
  
`;