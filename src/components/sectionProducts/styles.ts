import styled from "styled-components";

export const SectionStyles = styled.section`
    .productsContainer{
        width: 100vw;
        height: 749px;
        background-image: url('./backgroundWhite.png');
        padding-top: 100px;
        
        .title-products{
            font-size: 2em;
            font-weight: bold;
            width: 1200px;
            height: 50px;
            margin: 0 auto;
        }

        .section-products-container{
            margin-top: 40px;
            width: 100%;
            height: 520px;
            display: flex;
            justify-content: center;
            align-items: center;
            
            .section-1{
                width: 1200px;
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

      

    .blackBg{
        background-color: #333;
    }

    
    .blueBg{
        background-color: #04adee;
    }

    
    .whiteBg{
        background-color: #CEC2D0;
    }

    
    .greenBg{
        background-color: #E6DD00;
    }

    .whiteCircle{
        background-color: #CEC2D0;
    }

    .limeCircle{
        background-color: #E6DD00;
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

    .mt-20{
        margin-top: 50px
    }
`;
