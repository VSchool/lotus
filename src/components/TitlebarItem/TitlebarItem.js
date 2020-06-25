import React from 'react'
import styled from 'styled-components'

import { itemStatus } from './utils'
import { black, gray } from '../../colors/gray'
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
`

const ItemTitle = styled.p`
    margin: 0px 0px 2px 0px;
    width: 100px;
    height: 12px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${props => props.color};
    /* color: ${gray.base}; */
    opacity: ${props => props.opacity};
    box-sizing: border-box;
    /* border: 1px dotted blue; */
`

const BottomWrapper = styled.div`
    width: 100%;
    display: flexbox;
    align-items: center;
    /* border: 1px solid orange; */
    box-sizing: border-box;
`

const CircleCheckContainer = styled.div`
    width: 16px;
    height: 16px;
    display: ${props => props.display};
    /* display: inline-block; */
    margin-right: 4px;
    /* border: 1px dotted red; */
`

const ItemSubtitle = styled.p`
    margin: 0px 0px 0px 0px;
    max-width: 100%;
    height: 13px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: ${props => props.color};
    /* color: ${gray.lighter}; */
    opacity: ${props => props.opacity};
    /* opacity: 0.8; */
    /* border: 1px solid red; */
    box-sizing: border-box;
`

function TitlebarItem({status, title, subtitle}) {
    const { background,
            border, 
            opacity, 
            checkmarkDisplay,
            subtitleColor,
            titleColor,
             } = itemStatus(status)
    console.log(title, subtitle)
    return (
        <ItemContainer border={border} opacity={opacity}>
            <ItemTitle color={titleColor} opacity={opacity}>{title}</ItemTitle>
            <BottomWrapper>
                <CircleCheckContainer display={checkmarkDisplay}>
                    <img src={circleCheck} alt='Step completed.'  />
                </CircleCheckContainer>
                <ItemSubtitle color={subtitleColor} opacity={opacity}>{subtitle}</ItemSubtitle>
            </BottomWrapper>
        </ItemContainer>
    )
}

export default TitlebarItem