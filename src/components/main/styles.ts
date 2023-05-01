import styled from "styled-components";


export const MainStyles = styled.main`
  .mainContainer{
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: black;
    padding: 0px;
    z-index: -2;
    justify-content: center;
    

    .bg-cont{
      width: 100vw;
      height: 100vh;
      position: fixed;
      // background-image: url('./bg.jpg');
      // background-size: cover;
      // background-repeat: no-repeat;
      display: flex;
      justify-content: center;

      #video-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        
      }

      .img-powerade{
        width: 1200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding: 0;
        
        
        img{
          width: 800px;
          max-width: 100%;
          height: auto;
          opacity: 1;
          margin-top: -60px;
          transform: translateX(-110px);
        }

        h2{
          width: 350px;
          text-align: center;
          font-size: 3em;
          color: white;
          text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
            0px -4px 10px rgba(255,255,255,0.3);
          margin-top: -120px;
        }
      }

    }
  }
`;