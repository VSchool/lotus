import React from "react"
import styled from "styled-components"
import "../../lotus.scss"

const CardsContainer = styled.div`
    display: grid;
    grid-gap: 24px;
    width: 100%;
    max-width: 848px;
    overflow: scroll hidden;
    grid-template-rows: repeat(auto-fit, minmax(325px, max-content));
    grid-auto-flow: column;
    grid-auto-columns: 325px;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 450px) {
        grid-auto-columns: 85%;
    }

    @media (min-width: 700px) {
        grid-template-columns: repeat(2, minmax(235px, 1fr));
        grid-auto-flow: row;
        flex-wrap: wrap;
        overflow: initial;
    }
`
export default function CardGroup({ children, ...rest }) {
    return <CardsContainer {...rest}>{children}</CardsContainer>
}
