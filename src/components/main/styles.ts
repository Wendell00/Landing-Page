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
        width: 100vw;
        height: 100%;
        padding-top: 70px;

        @media screen and (min-width: 1030px){
          align-items: start;
          width: 1200px;
          padding-top: 2%;
        }
            
        img{
          width: 100%;
          height: auto;
          opacity: 1;
          display: flex;
          align-self: end;
          justify-self: center;
          position: absolute;
          left: 50%; right: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%) scale(1.2);

          @media screen and (min-width: 500px){
            position: static;
            transform: translateX(0) translateY(0);
            left: auto;
            top: auto;
            width: 55%;
            min-width: 500px;
          }

          @media screen and (min-width: 1030px){
            width: 66%;
            margin-left: 0;
            transform: translateX(-110px);
          }
        }

        h2{
          width: 70%;
          max-width: 350px;
          text-align: center;
          font-size: 2.2em;
          color: white;
          text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
            0px -4px 10px rgba(255,255,255,0.3);
          position: absolute;
          left: 40%;
          top: 65%;
          transform: translateX(-50%) translateY(-50%);

          @media screen and (min-width: 500px){
            transform: translateX(0) translateY(0);
            margin-top: -100px;
            position: static;
            left: auto;
            top: auto;
            font-size: 2.2em;
            width: 350px;
          }

          @media screen and (min-width: 1200px){
            font-size: 3em;
            margin-top: -160px;
            width: 350px;
          }
        }
      }
    }
  }
`;