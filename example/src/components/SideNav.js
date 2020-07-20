import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

import logo from '../assets/images/VschoolLogo.png'

const SideNavContainer = styled.div`
    width: 280px;
    padding: 32px 0px 0px 24px;
    background: #C4C4C4;
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

const NavLogoContainer = styled.div`
    margin: 0px 0px 32px 0px;
    height: 24px;
    box-sizing: border-box;

    & > img {
        height: 100%;
    }
`

const ComponentList = styled.div`
    margin: 32px 0px 0px 0px;
    box-sizing: border-box;
`

export default function SideNav() {
    return (
        <SideNavContainer>
            <NavLogoContainer><img src={logo} alt={'V School logo'} /></NavLogoContainer>
            <WelcomeText>Welcome</WelcomeText>
            <IntroductionText>Introduction</IntroductionText>
            <ComponentList>
                <WelcomeText>Reference</WelcomeText>
                <NavItem name={'Button'} />
                <NavItem name={'Card'} />
                <NavItem name={'Modal'} />
                <NavItem name={'Other'} />
            </ComponentList>
        </SideNavContainer>
    )
}