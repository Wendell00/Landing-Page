import styled from "styled-components";

export const InfoProductsStyles = styled.main`

  .infoProductsContainer{
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);

    .modal{
      width: 80%;
      height: 450px;
      background-color: rgba(0,0,0, 0.95);
      border-radius: 50px;
      position: relative;

      .close{
        position: absolute;
        top: 30px; right: 50px;
        width: 40px; height: 40px;
        cursor: pointer;

        img{
            width: 100%; height: 100%;
        }
      }

      .titleModal{
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        margin-top: 25px;
        

        h1{
          width: 100%;
          height: auto;
          color: white;
          font-size: 4em;
          text-align: center;
        }
      }

      .descriptionModal{
        width: 100%;
        height: auto;
        display: flex;
        align-items: start;
        justify-content: center;

        p{
          width: 50%;
          height: auto;
          color: white;
          font-size: 1em;
          font-family: 'Montserrat', sans-serif;
          text-align: center;
        }
      }

      .flavors{
        width: 100%;
        height: 40%;
        margin-top: 2%;

        .labels{
          width: 80%;
          height: 10%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0 auto;

          p{
            width: 150px;
            text-align: center;
            font-size: 1.3em;
            font-family: 'Roboto';
            font-weight: bold;
          }
        }

        .circles{
          width: 80%;
          height: 60%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0 auto;

          div{
            width: 90px;
            height: 90px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;

            {
              img{
                width: 50%;
                height: 50%;
                opacity: 0.6;
              }
            }
          }
        }
      }

      .ingredients{
        width: 50%;
        height: 30%;
        margin: 0 auto;
        margin-top: 5%; 

        p{
          width: 100%;
          height: auto;
          color: white;
          font-size: 0.8em;
          font-family: 'Roboto', sans-serif;
          text-align: center;
        }
      }
    }
  }

`;