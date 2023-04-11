import styled from "styled-components";


export const MainStyles = styled.main`
  .mainContainer{
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: black;
    padding: 0px;

    .bg-cont{
      width: 100vw;
      height: 100vh;
      background-image: url('./bg.jpg');
      // background-color: rgba(0, 0, 0, 1); /* Define um fundo preto com 50% de opacidade */
      // opacity: 0.5; /* Define a opacidade do elemento como 100% */
      background-size: cover;
      background-repeat: no-repeat:
      display: flex;



      .img-powerade{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
          width: auto;
          height: 60%;
          opacity: 1;
        }
      }
    }
  }
`;