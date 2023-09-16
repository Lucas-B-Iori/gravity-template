import { styled } from "styled-components"

export const StyledBotao = styled.a`
    background-color: #000;
    color: #fff;
    padding: 20px;
    border: 1px solid #fff;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }
`