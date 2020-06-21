import React from 'react'
import styled from 'styled-components'

import { Button } from '../Button'
import vsLogo from '../../assets/vs-logo.svg'

const FooterContainer = styled.div`
    position: relative;
    max-width: 416px;
    height: 64px;

    @media (min-width: 768px) {
        /* min-width: 1200px; */
        min-width: 100%;
        min-height: 96px;
    }
    /* border: 1px solid blue; */
`

const FooterWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: #21201F;

    @media (min-width: 768px) {
        padding: 0px 88px 0px 88px;
    }
`

const LogoContainer = styled.div`
    width: 40px;
    height: 32px;
    margin: 0px 60px 0px 18px;
    /* border: 1px solid red; */

    @media (min-width: 768px) {
        border: 1px solid red;
        margin: 0px 0px 0px 0px;
    }
`

const HeaderP = styled.p`
    margin: 0px 18px 0px 60px;
    min-width: 80px;
    height: 16px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #D8D4CF;
    /* border: 1px solid gray; */

    @media (min-width: 768px) {
        margin: 0px 24px 0px 536px;
        display: flex;
        align-items: center;
        height: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        /* border: 1px solid gray; */
        box-sizing: border-box;
        color: #FFFFFF;

    }
`

const HeaderMark = styled.span`
    display: none;
    background: none;
    color: #D8D4CF;
    text-align: left;
    /* border: 1px solid lightblue; */

    @media (min-width: 768px) {
        margin: 0px 0px 0px 4px;
        display: initial;
        color: #FFFFFF;

        /* border: 1px solid green; */
    }
`

const HeaderButton = styled(Button)`
    margin: 0px 18px 0px 0px;
    width: 128px;
    height: 32px;
    font-size: 12px;
    background: #21201F;
    border: 1px solid #FBF9F7;

    @media (min-width: 768px) {
        width: 176px;
        height: 56px;
        font-size: 14px;
        /* color: red; */
        /* margin: 0px 88px 0px 24px; */
    }
`

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <LogoContainer>
                    <img src={vsLogo} alt='V School Logo' />
                </LogoContainer>
                <HeaderP>Questions<HeaderMark>about applying</HeaderMark>?</HeaderP>
                    <HeaderButton buttonStyle="primary-dark" buttonSize="xtrasm">
                        Let's Talk
                    </HeaderButton>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer