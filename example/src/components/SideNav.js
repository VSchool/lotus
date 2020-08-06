import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
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
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

const LinkArea = styled(Link)`
    margin: 0px 0px 8px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #21201F;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        text-decoration-color: #D9ECE8;
    }
`

function SideNav() {
    return (
        <SideNavContainer>
            <NavLogoContainer>
                <img src={logo} alt={"V School logo"} />
            </NavLogoContainer>
            <WelcomeText>Welcome</WelcomeText>
            <LinkArea to="/">Introduction</LinkArea>
            <ComponentList>
                <WelcomeText>Reference</WelcomeText>
                <LinkArea to="/button">Button</LinkArea>
                <LinkArea to="/controls">Controls</LinkArea>
                <LinkArea to="/card">Card</LinkArea>
                <LinkArea to="/footer">Footer</LinkArea>
                <LinkArea to="/header">Header</LinkArea>
                <LinkArea to="/modal">Modal</LinkArea>
                <LinkArea to="/profile">Profile</LinkArea>
                <LinkArea to="/statusChip">Status Chip</LinkArea>
                <LinkArea to="/statusMessage">Status Message</LinkArea>
                <LinkArea to="/taskbar">Taskbar</LinkArea>
                <LinkArea to="/titlebarItem">Titlebar Item</LinkArea>
                <LinkArea to="titlebar">Titlebar</LinkArea>
            </ComponentList>
        </SideNavContainer>
    )
}

export default SideNav
