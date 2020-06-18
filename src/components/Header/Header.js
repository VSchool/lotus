import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


import { getHeaderType } from './utils'

import backArrow from '../../assets/icons/arrow-back.svg'
import vschoolLogo from '../../assets/icons/vschoolLogo.svg'
import accountCircle from '../../assets/icons/account-circle24px.svg'
import clearX from '../../assets/icons/clear24px.svg'

const HeaderContainer = styled.div`
    /* position: relative; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1440px;
    height: 80px;
    padding: 0px 88px 0px 88px;
    background: #FBF9F7;
    box-shadow: 0px 4px 16px rgba(33, 32, 31, 0.1);
    box-sizing: border-box;
    /* border: 1px solid dodgerblue; */
`

const BackContainer = styled.div`
    /* box-sizing: border-box; */

    display: flex;
    justify-content: space-between;
    /* position: absolute; */
    width: 132px;
    height: 24px;
    /* height: 24px; */
    /* height: 28px; */
    /* left: 88px; */
    /* top: 26px; */
    /* border: 1px solid red; */
`

const BackText = styled.p`
    margin: 0px;
    /* position: absolute; */
    width: 96px;
    height: 24px;
    /* left: 124px;
    top: 26px; */
    font-family: "aktiv-grotesk";
    /* font-family: Aktiv Grotesk; */
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #514F4B;
    /* border: 1px solid red; */
`

const LogoContainer = styled.div`
    /* box-sizing: border-box; */

    /* position: absolute; */
    width: 96.75px;
    height: 24px;
    /* left: 672px;
    top: 28px; */
    /* border: 1px solid green; */
`

const AccountContainer = styled.div`
    width: 24px;
    height: 24px;
    /* border: 1px solid gold; */
`

function Header({status, err}) {
    const { src } = getHeaderType(status)
    // console.log(src)
    return (
        <HeaderContainer>
            <BackContainer>
                <img src={backArrow} />
                <BackText>vschool.io</BackText>
            </BackContainer>
            <LogoContainer>
                <img src={vschoolLogo} />
            </LogoContainer>
            <AccountContainer>
                <img src={src.accountCircle} alt='placeholder image' />
            </AccountContainer>
        </HeaderContainer>
    )
}

Header.propTypes = {
    status: PropTypes.string.isRequired,
    err: PropTypes.string
  }

export default Header