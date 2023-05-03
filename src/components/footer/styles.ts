import styled from "styled-components";

export const FooterStyles = styled.footer`
    .topFooter{
        width: 100vw;
        height: 283px;
        background-image: url('./footer/footer.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;

        .title-footer{
            width: 100%;
            height: 50px;
            padding-left: 105px;
            font-size: 2em;
            font-weight: bold;
            color: black;
            position: relative;
            z-index: 2;
        }

        .btn-Learn{
            padding: 15px 60px;
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

    footer{
        width: 100vw;
        height: 400px;
        background-color: black;
        padding-top: 50px;
        display: flex;
        justify-content: center;

        .container{
            width: 100%;
            height: 100%;

            .imgContainer{
                width: 100%;
                display: flex;
                justify-content: center;

                img{
                    width: auto;
                    height: 50px; 
                }
            }

            .textContainer{
                width: 800px;
                height: 70%;
                margin: 0 auto;
                text-align: center;
        
                h3{
                    margin-top: 20px;
                    font-size: 1.2em;
                    font-weight: 500;
                    font-family: 'Montserrat', sans-serif;
                    color: white;
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
                        font-size: 1em;
                        font-weight: 500;
                        font-family: 'Montserrat', sans-serif;
                        color: white;

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
