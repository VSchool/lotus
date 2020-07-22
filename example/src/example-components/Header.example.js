import React from 'react'
import styled from 'styled-components'
import { Header } from '@vschool/lotus'

const HeaderExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const SectionName = styled.p`
    margin: 0px 0px 24px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

export default () => {
    return (

        <HeaderExampleContainer>
            <SectionName>Examples</SectionName>
            <Header />
        </HeaderExampleContainer>
    )
}