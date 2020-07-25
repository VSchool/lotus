import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import logo from "../assets/images/VschoolLogo.png"

const SideNavContainer = styled.div`
    width: 280px;
    padding: 32px 0px 0px 24px;
    background: #c4c4c4;
`

const WelcomeText = styled.p`
    margin: 0px 0px 16px 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
`

const IntroductionText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: "aktiv-grotesk";
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
    font-family: "aktiv-grotesk";
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

function SideNav() {

    return (
        <SideNavContainer>
            <NavLogoContainer>
                <img src={logo} alt={"V School logo"} />
            </NavLogoContainer>
            <WelcomeText>Welcome</WelcomeText>
            <Link to='/'>Introduction</Link>
            <IntroductionText>Introduction</IntroductionText>
            <ComponentList>
                {/* <Link to='/controls'>Testing</Link> */}
                <WelcomeText>Reference</WelcomeText>
                <ComponentName value={'Controls'} ><Link to='/controls'>Controls</Link></ComponentName>
                <ComponentName value={'Card'} ><Link to='/card'>Card</Link></ComponentName>
                <ComponentName value={'Modal'} >Modal</ComponentName>
                <ComponentName value={'Status Message'} >Status Message</ComponentName>
                <ComponentName value={'Header'} >Header</ComponentName>
                <ComponentName value={'Footer'} >Footer</ComponentName>
                <ComponentName value={'Profile'} >Profile</ComponentName>
                <ComponentName value={'StatusChip'} >Status Chip</ComponentName>
                <ComponentName value={'Taskbar'} >Taskbar</ComponentName>
                <ComponentName value={'TitlebarItem'} >Titlebar Item</ComponentName>
                <ComponentName value={'Titlebar'} >Titlebar</ComponentName>
                <ComponentName value={'Button'} >Button</ComponentName>
            </ComponentList>
        </SideNavContainer>
    )
}

export default SideNav