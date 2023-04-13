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
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;

      .img-powerade{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
          width: auto;
          max-width: 100%;
          height: 60%;
          opacity: 1;
        }
      }

      .bg-text{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        h2{
          text-align: center;
          font-size: 5em;
          color: white;
          text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
            0px -4px 10px rgba(255,255,255,0.3);
        }
      }
    }
  }
`;