import styled from "styled-components";

export const SectionStyles = styled.section`
    .productsContainer{
        width: 100vw;
        height: 100vh;
        background-image: url('./PowerRadeOrangeBg.png');
        padding-top: 100px;
        
        .title-products{
            font-size: 2em;
            font-weight: bold;
            width: 100vw;
            height: 50px;
            padding-left: 105px;
        }

        .section-products-container{
            margin-top: 40px;
            width: 100%;
            height: 520px;
            display: flex;
            justify-content: center;
            align-items: center;
            

            .section-1{
                width: 86%;
                height: 100%;
                border-radius: 60px;
                

                .swiper{
                    height: 100%;   
                    border-radius: 60px;
                    background-color: rgba(255,255,255, .6);
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                    
                    .swiper-wrapper{
                        height: 100%;
    
                        .swiper-slide{
                            height: 100%;
                            display: flex;


                            .p1{
                                width: 35%;
                                height: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                img{
                                    width: auto;
                                    height: 90%;
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
                                            color: black;
                                            margin-right: 30px;
                                            text-align: center;
                                            
                                        }
    
                                        .description{
                                            font-weight: bold;
                                            text-align: center;
                                            font-size: 1.1em;
                                            font-family: 'Arial';
                                            width: 95%;
                                        }
    
                                        .changeBottleContainer{
                                            width: 100%;
                                            height: 150px;
                                            display: flex;
                                            justify-content: center;
                                    
                                            .circles-p1{
                                                width: 100%;
                                                display: flex;
                                                align-items: center;
                                                justify-content: space-around;
                                    
                                                button{
                                                    width: 64px;
                                                    height: 64px;
                                                    border-radius: 100%;
                                                    border: 2px solid black;
                                                    cursor: pointer;
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
                                            color: black;
                                            font-weight: bold;
                                            text-align: center;
                                            font-size: 0.8em;
                                            font-family: "Arial", "sans-serif";
                                            width: 95%;
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


    .blackBg{
        background-color: #000;
    }

    
    .blueBg{
        background-color: #04adee;
    }

    
    .whiteBg{
        background-color: #CEC2D0;
    }

    
    .greenBg{
        background-color: green;
    }

    .whiteCircle{
        background-color: #CEC2D0;
    }

    .blueCircle{
        background-color: #04adee;
    }

    .greenCircle{
        background-color: #8CDA00;
    }

    .orangeCircle{
        background-color: #FF6E00;
    }

    .purpleCircle{
        background-color: #8149B9;
    }

    .redCircle{
        background-color: #E30100;
    }

    .colorBlack{
        color: black;
    }

    .colorWhite{
        color: white;
    }

    .swiper-button-prev,
    .swiper-button-next {
    position: absolute;
    top: var(--swiper-navigation-top-offset, 50%);
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
    }
    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
    }
    .swiper-button-prev.swiper-button-hidden,
    .swiper-button-next.swiper-button-hidden {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
    }
    .swiper-navigation-disabled .swiper-button-prev,
    .swiper-navigation-disabled .swiper-button-next {
    display: none !important;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
    font-family: swiper-icons;
    font-size: 2em;
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
    }
    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
    left: var(--swiper-navigation-sides-offset, 10px);
    right: auto;
    }
    .swiper-button-prev:after,
    .swiper-rtl .swiper-button-next:after {
    content: 'prev';
    }
    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
    right: var(--swiper-navigation-sides-offset, 10px);
    left: auto;
    }
    .swiper-button-next:after,
    .swiper-rtl .swiper-button-prev:after {
    content: 'next';
    }
`;
