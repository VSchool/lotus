import React from "react"
import styled from "styled-components"
import "../../lotus.scss"

const CardsContainer = styled.div`
    display: grid;
    grid-gap: 24px;
    overflow: scroll hidden;
    grid-template-rows: 296px;
    grid-auto-flow: column;
    grid-auto-columns: 325px;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 450px) {
        grid-auto-columns: 75%;
    }

    @media (min-width: 700px) {
        grid-template-columns: repeat(2, minmax(235px, 412px));
        grid-auto-flow: row;
        flex-wrap: wrap;
        overflow: initial;
        grid-auto-rows: 296px;
    }
`
export default function CardGroup({ children, ...rest }) {
    return <CardsContainer {...rest}>{children}</CardsContainer>
}
