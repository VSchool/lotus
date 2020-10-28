import React from "react"
import styled from "styled-components"
import "../../lotus.scss"

const CardsContainer = styled.div`
    display: flex;
    overflow: scroll hidden;

    @media (min-width: 800px) {
        flex-wrap: wrap;
        overflow: initial;
    }
`
export default function CardGroup({ children, ...rest }) {
    return <CardsContainer {...rest}>{children}</CardsContainer>
}
