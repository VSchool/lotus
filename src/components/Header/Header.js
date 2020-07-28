import React from "react"
import styled from "styled-components"

import headerLogo from "../../assets/vs-header-logo.svg"
import backArrow from "../../assets/icons/arrow-back.svg"
import accountCircle from "../../assets/icons/account-circle24px.svg"
import clearX from '../../assets/icons/clear24px.svg'
import * as colors from "../../colors"

import Profile from '../Profile/Profile'

const HeaderContainer = styled.div`
    position: relative;
    max-width: 100%;
    /* height: 80px; */
    padding: 28px 24px 28px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.gray.lighter};
    box-shadow: 0px 4px 16px rgba(33, 32, 31, 0.1);
    /* border: 1px solid lightcoral; */

    @media (min-width: 768px) {
        max-width: 100%;
    }
`

const BackContainer = styled.div`
    display: flex;
    align-items: center;
    /* border: 1px solid lightcoral; */
`

const BackArrowContainer = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    /* border: 1px dotted gray; */
`

const BackText = styled.p`
    margin: 0px 0px 0px 16px;
    display: none;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #514F4B;
    /* border: 1px dotted blue; */

    @media (min-width: 768px) {
        display: block;
    }
`

const HeaderLogoContainer = styled.div`
    display: flex;
    align-items: center;
    /* border: 1px solid blue; */
`

const IconContainer = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px dotted lightcoral; */
`

const EmptyDiv = styled.div`

`

const ProfileElementContainer = styled.div`
    display: none;
    position: absolute;
    top: 88px;
    right: 24px;
    /* border: 1px solid blue; */
`

function Header(props) {

    function chooseIcon(iconState) {
        switch (iconState) {
            case 'default':
                return<EmptyDiv></EmptyDiv>
            case 'loggedIn':
                return<img src={accountCircle} alt='hello' onClick={handleClick} />
            case 'closeProfile':
                return<img src={clearX} alt='hello' onClick={handleClick} />
            default:
                return ''
        }
    }

    function handleClick() {
        let profile = document.getElementById('profileElement')
        if (profile.style.display === '') {
            profile.style.display = 'block'
        } else if (profile.style.display === 'block') {
            profile.style.display = ''
        }
    }

    let IconToDisplay = chooseIcon(props.headerState)

    return (
        <HeaderContainer>
            <BackContainer>
                <BackArrowContainer><img src={backArrow} alt={'Back to V School.io'} /></BackArrowContainer>
                <BackText>vschool.io</BackText>
            </BackContainer>
            <HeaderLogoContainer><img src={headerLogo} alt={'V School logo'} /></HeaderLogoContainer>
            <IconContainer>{IconToDisplay}</IconContainer>
            <ProfileElementContainer id={'profileElement'}>
                <Profile userName={'Namey Namerson'} userEmail={'emailaddress@woah.com'} userPhone={'###-###-####'} userCourse={'Fullstack Javascript'} userTime={'Full - Time'} />
            </ProfileElementContainer>
        </HeaderContainer>
    )
}

export default Header
