import React, { useContext } from 'react'
import styled from 'styled-components'
import { ComponentDisplayContext } from '../providers/Store'
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

const ComponentName = styled.button`
    margin: 4px 0px 4px 0px;
    padding: 0px;
    width: 100%;
    text-align: left;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    border: none;
    background: none;
    outline: none;
    /* border: 1px solid red; */
`



export default function SideNav() {

    const [,setComponentDisplay] = useContext(ComponentDisplayContext)

    const handleClick = (e) => {
        setComponentDisplay({componentDisplay: e.target.value})
    }

    return (
        <SideNavContainer>
            <NavLogoContainer><img src={logo} alt={'V School logo'} /></NavLogoContainer>
            <WelcomeText>Welcome</WelcomeText>
            <IntroductionText>Introduction</IntroductionText>
            <ComponentList>
                <WelcomeText>Reference</WelcomeText>
                <ComponentName value={'Card'} onClick={handleClick}>Card</ComponentName>
                <ComponentName value={'Controls'} onClick={handleClick}>Controls</ComponentName>
                <ComponentName value={'Modal'} onClick={handleClick}>Modal</ComponentName>
                <ComponentName value={'Status Message'} onClick={handleClick}>Status Message</ComponentName>
                <ComponentName value={'Header'} onClick={handleClick}>Header</ComponentName>
                <ComponentName value={'Footer'} onClick={handleClick}>Footer</ComponentName>
                <ComponentName value={'Profile'} onClick={handleClick}>Profile</ComponentName>
                <ComponentName value={'StatusChip'} onClick={handleClick}>Status Chip</ComponentName>
                <ComponentName value={'Taskbar'} onClick={handleClick}>Taskbar</ComponentName>
                <ComponentName value={'TitlebarItem'} onClick={handleClick}>Titlebar Item</ComponentName>
                <ComponentName value={'Titlebar'} onClick={handleClick}>Titlebar</ComponentName>

            </ComponentList>
        </SideNavContainer>
    )
}