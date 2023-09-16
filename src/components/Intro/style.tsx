import { styled } from "styled-components"
import intro from '../../assets/intro.jpg'

export const StyledIntro = styled.section`

    background: 
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url(${intro});
    /* background-position: 0 -150px; */
    background-size: cover;
    background-repeat: no-repeat;
    height: 90vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h1 {
        color: #fff;
        font-weight: 700;
        font-size: 70px;
    }

    p {
        color: #fff;
        width: 80%;
        text-align: center;
        font-size: 21px;
        line-height: 38px;
    }

    div {
        display: flex;
        gap: 14px;
    }
`