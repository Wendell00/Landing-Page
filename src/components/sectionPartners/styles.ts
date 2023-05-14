import styled from "styled-components";

export const SectionStyles = styled.section`
    .partnersContainer{
        width: 100vw;
        height: 749px;
        background-repeat: no-repeat;
        padding-top: 100px;
        background-color: black;
        position: relative;

        #hero {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            z-index: 1;
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
                    font-size: 2em;
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
            width: 1200px;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            justify-content: center;
            margin: 0 auto;
            max-width: 1238px;
            padding-top: 40px;
            position: relative;
            z-index: 2;

            @media screen and (min-width: 1200px){
                width: 1200px;
            }
          }
          
          .column {
            text-align: center;

            img{
                width: 100%;
                height: auto;
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
