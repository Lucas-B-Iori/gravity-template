import { styled } from "styled-components"

export const StyledLinks = styled.li`
    width: 250px;
    list-style: none;
    padding: 8px 0;
    border-bottom: 1px solid #444;
    h4 {
        color: rgba(255, 255, 255, 0.8);
        margin: 8px 0;

    }

    span {
        font-size: 10px;
        color: #999;
    }

    &:last-of-type {
        border: none;
    }
`