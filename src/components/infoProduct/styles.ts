import styled from "styled-components";

export const InfoProductsStyles = styled.main`

  .infoProductsContainer{
    width: 100vw;
    height: 100vh;
    min-height: 426px;
    position: fixed;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);

    .modal{
      width: 80%;
      max-width: 1100px;
      height: 450px;
      background-color: rgba(0,0,0, 0.95);
      border-radius: 50px;
      position: relative;
      padding-top: 35px;

      @media (min-width: 768px) {
        padding: 0;
      }

      .close{
        position: absolute;
        top: 30px; right: 50px;
        width: 30px; height: 30px;
        cursor: pointer;

        @media (min-width: 768px) {
          width: 35px; height: 35px;
          top: 20px; right: 25px;
        }

        @media (min-width: 1200px) {
          width: 40px; height: 40px;
        }

        img{
            width: 100%; height: 100%;
        }
      }

      .titleModal{
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content:center;
        margin-top: 25px;
        

        h1{
          width: 80%;
          height: auto;
          color: white;
          font-size: 1.7em;
          text-align: center;

          @media (min-width: 768px) {
            font-size: 2.5em;
          }

          @media (min-width: 1200px) {
            font-size: 4em;
          }
        }
      }

      .descriptionModal{
        width: 100%;
        height: auto;
        display: flex;
        align-items: start;
        justify-content: center;

        p{
          width: 80%;
          height: auto;
          color: white;
          font-size: 0.65em;
          font-family: 'Montserrat', sans-serif;
          text-align: center;

          @media (min-width: 768px) {
            font-size: 1em;
          }
        }
      }

      .flavors{
        width: 100%;
        height: 40%;
        margin-top: 15px;

        @media (min-width: 768px) {
          margin-top: 30px;
        }

        .labels{
          width: 80%;
          height: 30px;
          display: flex;
          justify-content: space-around;
          align-items: end;
          margin: 0 auto;
          margin-bottom: 8px;

          p{
            width: 100%;
            text-align: center;
            font-size: 0.8em;
            font-family: 'Roboto';
            font-weight: bold;

            @media (min-width: 768px) {
              font-size: 1.3em;
            }

          }
        }

        .circles{
          width: 80%;
          height: 55px;
          display: flex;
          justify-content: space-around;
          align-items: start;
          margin: 0 auto;

          @media (min-width: 768px) {
            height: 60%;
          }

          div{
            width: 55px;
            height: 55px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;

            @media (min-width: 768px) {
              width: 90px;
              height: 90px;
            }

            {
              img{
                width: 50%;
                height: 50%;
                opacity: 1;
              }
            }
          }
        }
      }

      .ingredients{
        width: 80%;
        height: 30%;
        margin: 0 auto;
        margin-top: 5%; 

        @media (min-width: 768px) {
          margin-top: 15px;
        }

        @media (min-width: 768px) {
          width: 50%;
        }

        p{
          width: 100%;
          height: auto;
          color: white;
          font-size: 0.6em;
          font-family: 'Roboto', sans-serif;
          text-align: center;

          @media (min-width: 768px) {
            font-size: 0.8em;
          }
        }
      }
    }
  }

`;