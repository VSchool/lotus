import React from "react"
import styled from "styled-components"

import Template from './Template'


const MainContainer = styled.div`
    width: 100%;
    padding: 32px 40px 24px 40px;
    overflow: scroll;
    /* background: #f6e8f9; */
`

export default function Main() {

    return (
        <MainContainer>
            <Template />
            <Template />
        </MainContainer>
    )
}
