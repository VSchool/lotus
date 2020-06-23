import React from 'react'
import styled from 'styled-components'

import headerLogo from '../../assets/vs-header-logo.svg'
import backArrow from '../../assets/icons/arrow-back.svg'
import accountCircle from '../../assets/icons/account-circle24px.svg'

const HeaderContainer = styled.div`
    position: relative;
    max-width: 416px;
    height: 80px;
    display: flex;
    align-items: center;
    background: #FBF9F7;
    box-shadow: 0px 4px 16px rgba(33, 32, 31, 0.1);

    @media (min-width: 768px) {
        min-width: 100%;
    }
`

const BackContainer = styled.div`
    margin: 0px 0px 0px 0px;
    position: absolute;
    left: 18px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        width: 132px;
        left: 88px;
    }
`

const ArrowContainer = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Fill color should be #514F4B; */
    box-sizing: border-box;
`

const BackText = styled.p`
    display: none;
    margin: 0px 0px 0px 16px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #514F4B;

    @media (min-width: 768px) {
        display: inline;
    }
`

const LogoContainer = styled.div`
    margin: 0px 0px 0px 0px;
    position: absolute;
    left: calc(50% - 96.75px/2 + 0.38px);
    height: 24px;

    @media (min-width: 768px) {
        position: absolute;
        margin: 0px 0px 0px 0px;
    }
`

const AccountCircleContainer = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 18px;
    margin: 0px 0px 0px 52px;
    /* Fill color should be #514F4B; */

    @media (min-width: 768px) {
        /* position: absolute; */
        right: 88px;
        margin: 0px 0px 0px 0px;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <BackContainer>
                <ArrowContainer>
                    <img src={backArrow} alt='Go back to vschool.io' />
                </ArrowContainer>
                <BackText>vschool.io</BackText>
            </BackContainer>  
            <LogoContainer>
                <img src={headerLogo} alt='V School Logo' />
            </LogoContainer>
            <AccountCircleContainer>
                <img src={accountCircle} alt='account profile image' />
            </AccountCircleContainer>
        </HeaderContainer>
    )
}

export default Header