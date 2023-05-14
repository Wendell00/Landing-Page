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
                width: 90%;
                height: 100%;
                border-radius: 60px;

                @media screen and (min-width: 1200px){
                    width: 1200px;
                }
     
                .swiper{
                    height: 100%;   
                    border-radius: 10px;
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

                                @media screen and (min-width: 967px) {
                                    width: 35%;
                                }

                                img{
                                    width: auto;
                                    height: 70%;
                                    filter: drop-shadow(8px 4px 10px black);

                                    @media screen and (min-width: 967px) {
                                        height: 90%;
                                    }
                                }

                                .barsProduct{
                                    transform: scale(0.8) translateX(30px);

                                    @media (min-width: 640px) {
                                        transform: scale(1.1) translateX(30px);
                                    }

                                    @media (min-width: 967px) {
                                        transform: scale(1.2) translateX(40px);
                                    }
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

                                @media screen and (min-width: 967px) {
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
                                            font-size 2em;
                                            margin-right: 20px;
                                            margin-bottom: 30px;
                                            text-align: center;

                                            @media screen and (min-width: 640px) {
                                                font-size 2.5em;
                                            }
                        

                                            @media screen and (min-width: 968px){
                                                font-size 3em;
                                                margin-right: 30px;
                                                margin-bottom: 0px;
                                            }
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

                                            @media screen and (min-width: 967px) {
                                                margin-top: 50px;
                                                height: 120px;
                                            }
                                    
                                            .circles-p1{
                                                width: 100%;
                                                height: auto;
                                                display: grid;
                                                grid-template-columns: repeat(3, 1fr);
                                                grid-template-rows: repeat(2, 1fr);
                                                grid-column-gap: 0px;
                                                grid-row-gap: 20px;

                                                @media screen and (min-width: 967px) {
                                                    height: 120px;
                                                    width: 100%;
                                                    grid-template-columns: repeat(5, 1fr);
                                                    grid-template-rows: 0fr;
                                                    grid-column-gap: 0px;
                                                    grid-row-gap: 0px;
                                                }
                                    
                                                div{
                                                    width: 70%;
                                                    height: 9.7vw;
                                                    border-radius: 100%;
                                                    border: 2px solid black;
                                                    display: flex;
                                                    justify-content: center;
                                                    align-items: center;
                                                    cursor: pointer;

                                                    img{
                                                        width: 50%;
                                                        height: 50%;
                                                        opacity: 0.8;
                                                    }
                                                    
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
                                                .circle2 { grid-area: 1 / 2 / 2 / 3;
                                                    @media screen and (min-width: 968px){
                                                        grid-area: auto;
                                                    }
                                                 }
                                                .circle3 { grid-area: 1 / 3 / 2 / 4;
                                                    @media screen and (min-width: 968px){
                                                        grid-area: auto;
                                                    }
                                                }
                                                .circle4 { grid-area: 2 / 1 / 3 / 2;
                                                    @media screen and (min-width: 968px){
                                                        grid-area: auto;
                                                    }
                                                }
                                                .circle5 { grid-area: 2 / 2 / 3 / 3;
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
                                                font-size: 12px;
                                                cursor: pointer;

                                                @media screen and (min-width: 390px){
                                                    font-size: 18px;
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
                                            font-size: 0.75em;
                                            font-family: "Arial", "sans-serif";
                                            width: 90%;
                                            display: none;
                                            margin: 0 auto;
    
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
        background-color: #04adee;
      }




      .productBard-p1{
        width: 100%;
        height: 55%;
        clip-path: polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 15;

        @media (min-width: 967px) {
            clip-path: polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%);
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
                    font-size 2em;
                    margin-right: 0px;
                    text-align: center;

                    @media screen and (min-width: 640px) {
                        font-size 2.5em;
                    }

                    @media screen and (min-width: 968px){
                        font-size 3em;
                    }
                }

                .description{
                    font-weight: bold;
                    text-align: center;
                    font-size: 1.1em;
                    font-family: 'Arial';
                    width: 95%;
                    display: none;
                    height: auto;
                    margin-bottom: 5px;

                    @media screen and (min-width: 968px){
                        display: block;
                    }
                }
        
                .btn-learn-Container{
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 15px;
                    margin-top: 30px;

                    @media screen and (min-width: 968px){
                        margin-top: 0px;
                    }

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
                    font-size: 0.75em;
                    font-family: "Arial", "sans-serif";
                    width: 90%;
                    display: none;
                    margin: 0 auto;

                    @media screen and (min-width: 968px){
                        display: block;
                    }
                }
            }
        }
        
    }

    .productBard-p2{
        width: 100%;
        height: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 16;


        .barsProduct{
            transform: scale(1);
            margin-top: -80px;
            width: 300px;
            height: auto;
            filter: drop-shadow(8px 4px 10px black);

            @media screen and(min-width: 640px) {
                transform: scale(1.2);
            }

            @media screen and (min-width: 967px) {
                transform: scale(1.2);
            }
        }
    }

    .block{
        display: block !important;
    }

`;




