import styled from "styled-components";

export const FooterStyles = styled.footer`
    .topFooter{
        width: 100vw;
        height: 283px;
        background-image: url('./backgroundWhite.png');
        background-position: center center;
        display: flex;
        justify-content: center;
        margin-top: -20px;

        .imgFooter{
            width: 100%;
            height: 100%;
            background-image: url('./footer/footerMobile.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;

            @media screen and (min-width: 540px){
                height: 477px;
            }

            @media screen and (min-width: 768px){
                max-width: 1920px;
                min-width: 1440px;
                background-image: url('./footer/footer.png');
                height: 100%;
            }

            .text-container{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                margin-top: 0px;

                @media screen and (min-width: 540px){
                    margin-top: 60px;
                }

                @media screen and (min-width: 768px){
                    margin-top: 0px;
                }

                .title-footer{
                    width: 100vw;
                    height: 50px;
                    position: relative;
                    z-index: 2;

                    @media screen and (min-width: 1200px){
                        width: 1200px;
                    }

                    .title-section{
                        font-size: 32px;
                        font-weight: bold;
                        color: black;
                        font-family: "Druk-Italic";
                        text-align: center;

                        @media screen and (min-width: 768px){
                            text-align: start;
                            font-size: 2em;
                        }
                    }

                    .btn-Learn{
                        padding: 15px 60px;
                        background-color: black;
                        margin-left: 10%;
                        width: 80vw;
                        color: white;
                        border: 3px solid black;
                        border-radius: 5px;
                        font-family: "Arial", "sans-serif";
                        font-weight: bold;
                        font-size: 18px;
                        cursor: pointer;

                        @media screen and (min-width: 768px){
                            width: auto;
                            margin-left: 0px;
                        }
            
                        :hover{
                            background-color: transparent;
                            color: black;
                        }
                    }
                }
            }   
        }
    }

    footer{
        margin-top: 0px;
        width: 100vw;
        height: 400px;
        background-color: black;
        padding-top: 50px;
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 10;

        @media screen and (min-width: 540px){
            margin-top: 120px;
        }

        @media screen and (min-width: 768px){
            margin-top: 0px;
        }

        .container{
            width: 100%;
            height: 100%;

            .imgContainer{
                width: 100%;
                display: flex;
                justify-content: center;

                img{
                    width: auto;
                    height: 40px; 

                    @media screen and (min-width: 540px){
                        height: 50px; 
                    }
                }
            }

            .textContainer{
                width: 100%;
                height: 70%;
                margin: 0 auto;
                text-align: center;
        
                h3{
                    margin-top: 20px;
                    font-size: 1em;
                    font-weight: 500;
                    font-family: 'Montserrat', sans-serif;
                    color: white;

                    @media screen and (min-width: 540px){
                        font-size: 1.2em;
                    }
                }

                ul{
                    width: 300px;
                    display: flex; 
                    justify-content: space-around;
                    align-items: center;
                    margin: 0 auto;
                    margin-top: 50px;

                    li{
                        list-style: none;
                        cursor: pointer;
                    }
                }

                .copyright{
                    margin-top: 80px;

                    p{
                        font-size: 0.8em;
                        font-weight: 500;
                        font-family: 'Montserrat', sans-serif;
                        color: white;

                        @media screen and (min-width: 540px){
                            font-size: 1em;
                        }

                        span{
                            color: #04adee;
                            font-weight: 500;
                            font-family: 'Montserrat', sans-serif;
                            cursor: pointer;

                            :hover{
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    }

    .credits{
        width: 100vw;
        height: 30px;
        display: flex;
        justify-content: center;
        background-color: #04adee;
        padding: 5px;

        p, a{
            font-size: 1em;
            font-weight: 600;
            font-family: 'Montserrat', sans-serif;
            color: white;
            text-decoration: none;

            :hover{
                color: black;
            }
        }
    }
`;
