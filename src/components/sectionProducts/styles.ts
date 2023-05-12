import styled from "styled-components";

export const SectionStyles = styled.section`
    .productsContainer{
        width: 100vw;
        height: 749px;
        background-image: url('./backgroundWhite.png');
        padding-top: 100px;
        
        .title-products{
            font-size: 1.6em;
            font-weight: bold;
            width: 100%;
            height: 50px;
            margin: 0 auto;
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

        .section-products-container{
            margin-top: 40px;
            width: 100%;
            height: 520px;
            display: flex;
            justify-content: center;
            align-items: center;
            
            .section-1{
                max-width: 1200px;
                width: 100%;
                height: 100%;
                border-radius: 60px;

                @media screen and (min-width: 1200px){
                    width: 1200px;
                }
     
                .swiper{
                    height: 100%;   
                    border-radius: 0px;
                    background-color: rgba(255,255,255, .6);
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

                    @media screen and (min-width: 968px){
                        border-radius: 60px;
                    }

                    .swiper-wrapper{
                        height: 100%;
    
                        .swiper-slide{
                            height: 100%;
                            display: flex;

                            .p1{
                                width: 45%;
                                height: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                position: relative;
                                z-index: 16;

                                @media (min-width: 967px) {
                                    width: 35%;
                                }

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
                                width: 55%;
                                height: 100%;
                                clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
                                display: flex;
                                align-items: center;
                                justify-content: end;
                                position: relative;
                                z-index: 15;

                                @media (min-width: 967px) {
                                    width: 65%;
                                    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
                                }

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
                                                grid-template-columns: repeat(3, 1fr);
                                                grid-template-rows: repeat(3, 1fr);
                                                grid-column-gap: 0px;
                                                grid-row-gap: 0px;

                                                @media (min-width: 967px) {
                                                    height: 120px;
                                                    width: 100%;
                                                    grid-template-columns: repeat(5, 1fr);
                                                    grid-template-rows: 0fr;
                                                    grid-column-gap: 0px;
                                                    grid-row-gap: 0px;
                                                }
                                    
                                                button{
                                                    width: 60%;
                                                    height: 8vw;
                                                    border-radius: 100%;
                                                    border: 2px solid black;
                                                    cursor: pointer;
                                                    
                                                    @media screen and (min-width: 968px){
                                                        width: 64px;
                                                        height: 64px;
                                                    }
                                                }

                                                .circle1 { grid-area: 1 / 1 / 2 / 2;
                                                    @media screen and (min-width: 968px){
                                                        grid-area: auto;
                                                    } 
                                                }
                                                .circle2 { grid-area: 1 / 3 / 2 / 4;
                                                    @media screen and (min-width: 968px){
                                                        grid-area: auto;
                                                    }
                                                 }
                                                .circle3 { grid-area: 2 / 2 / 3 / 3;
                                                    @media screen and (min-width: 968px){
                                                        grid-area: auto;
                                                    }
                                                }
                                                .circle4 { grid-area: 3 / 1 / 4 / 2;
                                                    @media screen and (min-width: 968px){
                                                        grid-area: auto;
                                                    }
                                                }
                                                .circle5 { grid-area: 3 / 3 / 4 / 4;
                                                    @media screen and (min-width: 968px){
                                                        grid-area: auto;
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
                        }
                    }
                }

            }
        }
    }

    .swiper-pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
      
      .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: black;
        margin: 0 5px;
        cursor: pointer;
      }
      
      .swiper-pagination-bullet-active {
        background-color: white;
      }
`;
