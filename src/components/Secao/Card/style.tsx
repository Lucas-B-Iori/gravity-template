import { styled } from "styled-components"

export const StyledCard = styled.div`
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 32px 0;
    width: 255px;
    height: 72px;

    &:hover {
        transition: 500ms;
        box-shadow: 1px 12px 10px rgba(0, 0, 0, 0.2);

    }
`