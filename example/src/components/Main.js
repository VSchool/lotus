import React from 'react'
import styled from 'styled-components'

import Card from '../example-components/Card.example'

const MainContainer = styled.div`
    width: 100%;
    padding: 32px 40px 24px 40px;
    overflow: scroll;
    /* background: #f6e8f9; */
`

const WelcomeText = styled.p`
    margin: 0px 0px 16px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
`

const IntroductionText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const LineBreak = styled.div`
    /* width: 80%; */
    height: 2px;
    background: #D1C8C8;
`

export default function Main() {
    return (
        <MainContainer>
            <WelcomeText>Welcome</WelcomeText>
            <IntroductionText>Introduction</IntroductionText>
            <LineBreak />
            <Card />
        </MainContainer>
    )
}