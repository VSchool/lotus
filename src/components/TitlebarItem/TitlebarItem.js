import React from 'react'
import styled from 'styled-components'

import { itemStatus } from './utils'
import { black } from '../../colors/gray'
import circleCheck from '../../assets/icons/circleCheck.svg'

const ItemContainer = styled.div`
    position: relative;
    max-width: 138px;
    height: 48px;
    background: ${black};
    opacity: ${props => props.opacity};
    border: ${props => props.border};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px 0px 18px;
    box-sizing: border-box;

    @media (min-width: 768px) {
        min-width: 400px;
        padding: 0px 128px 0px 88px;
    }
`

const ItemTitle = styled.p`
    margin: 0px 0px 2px 0px;
    max-width: 181px;
    height: 12px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${props => props.color};
    opacity: ${props => props.opacity};
    box-sizing: border-box;

    @media (max-width: 768px) {
        max-width: 184px;
    }
`

const BottomWrapper = styled.div`
    max-width: 100%;
    display: flexbox;
    align-items: center;
    box-sizing: border-box;

    @media (min-width: 768px) {
        max-width: 184px;
    }
`

const CircleCheckContainer = styled.div`
    width: 16px;
    height: 16px;
    display: ${props => props.display};
    margin-right: 4px;
    box-sizing: border-box;
`

const ItemSubtitle = styled.p`
    margin: 0px 0px 0px 0px;
    max-width: 100%;
    height: 16px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: ${props => props.color};
    opacity: ${props => props.opacity};
    box-sizing: border-box;

    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 16px;
    }
`

function TitlebarItem({status, title, subtitle}) {

    const { background,
            border, 
            opacity, 
            checkmarkDisplay,
            subtitleColor,
            titleColor,
             } = itemStatus(status)

    return (
        <ItemContainer border={border} opacity={opacity}>
            <ItemTitle color={titleColor} opacity={opacity}>{title}</ItemTitle>
            <BottomWrapper>
                <CircleCheckContainer display={checkmarkDisplay}>
                    <img src={circleCheck} alt='step completed.'  />
                </CircleCheckContainer>
                <ItemSubtitle color={subtitleColor} opacity={opacity}>{subtitle}</ItemSubtitle>
            </BottomWrapper>
        </ItemContainer>
    )
}

export default TitlebarItem