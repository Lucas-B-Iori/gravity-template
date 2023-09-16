import { styled } from "styled-components"

export const StyledInfos = styled.section`
    background-color: #222;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: space-evenly;
    padding: 45px 15px;

    .descricao {
        flex: 1 1;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        gap: 25px;

        img {
            width: 50%;
            margin-bottom: 10px;
        }
    }
`

export const SubTitulos = styled.h3`
    width: 250px;
    padding-bottom: 12px;
    border-bottom: 1px solid #fff;
    text-transform: uppercase;
`

export const Posts = styled.div`

`