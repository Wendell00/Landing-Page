import styled from "styled-components";


export const MainStyles = styled.main`
  .mainContainer{
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: black;
    padding: 0px;

    .bottle{
      width: 45%;
      height: 100%;
      background-image: url('./backgrounds/PowerRadeOrangeBg.png');
      background-size: cover;
      background-repeat: no-repeat;
      margin-left: -9px;
      display: flex;
      align-items: end;

      .imgBottle{
        width: auto;
        height: 85%;
        filter: drop-shadow(black 10px 10px 15px);
      }
    }
  
    .bg-text{
      width: 55%;
      height: 100%;
    }
  }
`;