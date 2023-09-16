import { styled } from 'styled-components'
import bg from "../../assets/bg-final.png"

export const StyledCompra = styled.section`
    background: url(${bg});
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 0;
    gap: 20px;
    color: #555;


    h3 {
        font-weight: 300;
        font-size: 32px;
        text-transform: uppercase;
    }

    p {
        width: 50%;
        text-align: center;
        font-size: 22px;
        line-height: 30px;
    }
`