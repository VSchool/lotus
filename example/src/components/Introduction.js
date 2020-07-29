import React from "react"
import styled from 'styled-components'
import logo from '../assets/images/vs-header-logo.svg'

const IntroContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
        width: 50%;
    }
`

function Introduction() {
    return (
        <IntroContainer>
            <img src={logo} alt={'V School Lotus'} />
        </IntroContainer>
    )
}

export default Introduction
