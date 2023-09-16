import { styled } from 'styled-components'

export const StyledSecao = styled.section`
    padding: 75px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-bottom: 1px solid #777;

    h2 {
        font-size: 60px;
        font-weight: 700;
    }

    p {
        color: #777;
        width: 58%;
        text-align: center;
        font-size: 19px;
        line-height: 42px;
    }

    .cards {
        width: 75%;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }
`