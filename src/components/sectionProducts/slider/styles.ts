import styled from "styled-components";

export const SectionStyles = styled.section`
.p1{
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: auto;
        height: 90%;
        filter: drop-shadow(8px 4px 10px black);
    }

    .barsProduct{
        transform: scale(1.2) translateX(40px);
    }
}

.p2{
    width: 65%;
    height: 100%;
    clip-path: polygon(21% 0, 100% 0, 100% 100%, 0% 100%);
    display: flex;
    align-items: center;
    justify-content: end;

    .textContainer{
        width: 80%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
            
        .containerContent{
            width: 100%;
            height: 100%;

            h1{
                font-size 3em;
                margin-right: 30px;
                text-align: center;
            }

            .description{
                font-weight: bold;
                text-align: center;
                font-size: 1.1em;
                font-family: 'Arial';
                width: 95%;
                display: none;

                @media screen and (min-width: 968px){
                    display: block;
                }
            }

            .changeBottleContainer{
                width: 100%;
                height: auto;
                margin-top: 0px;
                display: flex;
                justify-content: center;

                @media (min-width: 967px) {
                    margin-top: 50px;
                    height: 120px;
                }
        
                .circles-p1{
                    width: 100%;
                    height: auto;
                    display: grid;
                    grid-template-columns: 2fr;
                    gap: 10px;

                    @media (min-width: 967px) {
                        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                        height: 120px;
                        grid-template-columns: repeat(2, 1fr);
                        grid-template-rows: repeat(2, 1fr);
                    }
        
                    button{
                        width: 60px;
                        height: 60px;
                        border-radius: 100%;
                        border: 2px solid black;
                        cursor: pointer;
                        
                        @media screen and (min-width: 968px){
                            width: 64px;
                            height: 64px;
                        }
                    }
                }
            }
    
            div{
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                margin-bottom: 15px;

                .btn-Learn{
                    padding: 10px 20px;;
                    background-color: black;
                    color: white;
                    border: 3px solid black;
                    border-radius: 5px;
                    font-family: "Arial", "sans-serif";
                    font-weight: bold;
                    font-size: 18px;
                    cursor: pointer;
                    display: none;

                    @media screen and (min-width: 968px){
                        display: block;
                    }

                    :hover{
                        background-color: transparent;
                        color: black;
                    }
                }
            }

            .ingredients{
                font-weight: bold;
                text-align: center;
                font-size: 0.8em;
                font-family: "Arial", "sans-serif";
                width: 95%;
                display: none;

                @media screen and (min-width: 968px){
                    display: block;
                }
            }
        }
    }
 }
`;
