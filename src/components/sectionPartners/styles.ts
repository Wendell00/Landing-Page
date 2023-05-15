import styled from "styled-components";

export const SectionStyles = styled.section`
    .partnersContainer{
        width: 100vw;
        height: auto;
        min-height: 749px;
        background-repeat: no-repeat;
        padding-top: 100px;
        background-color: black;
        position: relative;

        #hero {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%) scale(5);
            z-index: 1;

            @media screen and (min-width: 630px){
                transform: translateX(-50%) translateY(-50%) scale(2.4);
                width: 50%;
            }

            @media screen and (min-width: 1200px){
                transform: translateX(-50%) translateY(-50%) scale(1.2);
                width: 1200px;
            }
        }

        .title-partners-container{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;

            .title-partners{
                width: 100%;
                height: 50px;
                font-size: 1.6em;
                font-weight: bold;
                color: white;
                position: relative;
                z-index: 2;
                text-align: center;
    
                
                @media screen and (min-width: 340px){
                    font-size: 1.6em;
                }
    
                @media screen and (min-width: 708px){
                    font-size: 2.5em;
                }
    
                @media screen and (min-width: 968px){
                    text-align: start;
                    font-size: 2em;
                }
    
                @media screen and (min-width: 1200px){
                    width: 1200px;
                }
    
            }
        }

        .container {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(1, 4fr);
            gap: 20px;
            justify-content: center;
            margin: 0 auto;
            max-width: 1238px;
            padding-top: 40px;
            position: relative;
            z-index: 2;


            @media screen and (min-width: 630px){
                grid-template-columns: repeat(2, 2fr);
            }

            @media screen and (min-width: 1200px){
                grid-template-columns: repeat(4, 1fr);
                width: 1200px;
            }
          }
          
          .last{
            margin-bottom: 80px;

            @media screen and (min-width: 1200px){
                margin-bottom: 0px;
            }
          }

          .column {
            width: 100%;
            text-align: center;

            img{
                width: 50%;
                height: auto;

                @media screen and (min-width: 630px){
                    width: 50%;
                }
                
                @media screen and (min-width: 1200px){
                    width: 100%;
                }
            }

            h2{
                width: 100%
                text-align: center;
                margin-top: 20px;
                font-size: 2.8em;
                color: white;
            }

            p{
                margin-top: 30px;
                color: white;
                font-family: 'Montserrat', sans-serif;
            }

            .desc-2{
                font-size: 0.7em;
            }
          }
    }

    .heigh20vh{
        width: 100vw;
        height: 170px;
        background-image: url('./backgroundWhite.png');
        background-position: center center;
    }
`;
