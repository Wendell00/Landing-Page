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
                background-color: #c2e7f5;
                border-radius: 60px;
            }
        }
    }

`;