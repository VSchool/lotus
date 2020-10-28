import React from "react"
import styled from "styled-components"
import "../../lotus.scss"

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const CardsContainer = styled.div`
    display: flex;
    overflow: scroll hidden;

    & > div {
        flex-basis: 100%;
        min-width: 325px;
        max-width: 412px;
        margin: 8px;

        &:first-child {
            margin-left: 0;
        }
    }

    @media (min-width: 738px) {
        width: 100%;
        flex-wrap: wrap;

        & > div {
            margin: 12px;
            flex-basis: calc(50% - 24px);

            &:first-child {
                margin-left: 12px;
            }
        }
    }
`
export default function CardGroup({ children, ...rest }) {
    return (
        <MainContainer>
            <CardsContainer {...rest}>{children}</CardsContainer>
        </MainContainer>
    )
}
