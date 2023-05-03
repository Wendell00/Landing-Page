import styled from "styled-components";


export const NavBarStyles = styled.nav`
  .navContainer{
    width: 100vw;
    height: 90px;
    position: fixed;
    background-color: transparent;
    display: flex;
    justify-content: center;
    transition: .3s;
    z-index: 999;
    
    .container-flex{
      width: 1000px;
      height: 90px;
      display: flex;
      justify-content: space-evenly;

      @media screen and (min-width: 1200px){
          width: 1200px;
      }

      @media screen and (min-width: 1030px){
        width: 1200px;
        justify-content: flex-start;
      }

      .menu-mobile{
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 1030px){
          display: none;
        }

        img{
          height: 40px;
          margin-top: -6px;
        }
      }

      .logoAndNav{
        width: 60%;
        height: 100%;
        display: flex;

        @media screen and (min-width: 1030px){
          width: 70%;
        }
  
        .logo{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          @media screen and (min-width: 1030px){
            width: 210px;
          }
      
          img{
            width: 200px;
          }
        }
      
        .navList{
          margin-left: 0px;
          height: 100%;
          width: 500px;
          display: none;

          @media screen and (min-width: 1200px){
            margin-left: 50px;
          }

          @media screen and (min-width: 1030px){
            display: flex;
          }
      
          ul{
            width: 100%;
            height: 100%;
            list-style: none;
            list-style-type: none;
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-around;
    
            li, a{
              font-weight: 600;
              font-size: 1.1em;
              cursor: pointer;
              font-family: 'Montserrat', sans-serif;
              text-decoration: none;
              color: white;
          
              :hover{
                color: #04adee;
              }
            }
          }
        }
      }

      .profile-mobile{
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 1030px){
          display: none;
        }

        img{
          height: 30px;
        }
      }
      
      .socialMedia{
        width: 30%;
        height: 100%;
        display: none;
        align-items: center;

        @media screen and (min-width: 1030px){
          display: flex;
        }
  
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
    
  }

  .navbar-scrolled{
    background-color: black;
  }
  
`;