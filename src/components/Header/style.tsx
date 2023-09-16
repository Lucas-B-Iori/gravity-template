import { styled } from "styled-components"

export const StyledHeader = styled.header`
    background-color: #000;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 21px;

    .lista {
        display: flex;
        gap: 32px;
        a {
            color: #555;
            list-style: none;
            text-decoration: none;
            font-weight: 500;
            font-size: 16px;
        }
        a:hover {
            color: #cdcbcb;
        }
    }
`