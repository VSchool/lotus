import React from "react"
import styled from "styled-components"
import { displayItemState } from "./utils"
import * as colors from "../../colors"
import circleCheck from "../../assets/icons/circleCheck.svg"

const ItemContainer = styled.div`
    position: relative;
    max-width: 144px;
    max-height: 48px;
    padding: 4px 20px 4px 16px;
    background: ${colors.black};
    box-sizing: border-box;
    border: ${props => props.border};
    opacity: ${props => props.opacity};

    @media (min-width: 768px) {    
        max-width: 400px;
        padding: 4px 16px 4px 88px;
    }
`

const TextLineOne = styled.p`
    margin: 0px 0px 2px 0px;
    display: flex;
    align-items: center;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${props => props.color};
    opacity: ${props => props.opacity};
`

const SecondLineContainer = styled.div`
    display: flex;
    align-items: center;
`

const CheckMarkContainer = styled.div`
    margin: 0px 4px 0px 0px;
    width: 16px;
    height: 16px;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
        height: 100%;
    }
`

const TextLineTwo = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: ${props => props.color};

    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 16px;
        color: ${colors.gray.lighter};
    }
`

function TitlebarItem(props) {
    console.log(props)
    const {
        border,
        opacity,
        lineOneColor,
        lineTwoColor,
        checkmarkDisplay,
        textOpacity
    } = displayItemState(props.titlebarItemState)

    return (
        <ItemContainer border={border} opacity={opacity}>
            <TextLineOne color={lineOneColor} opacity={textOpacity}>{props.lineOneText}</TextLineOne>
            <SecondLineContainer>
                <CheckMarkContainer display={checkmarkDisplay}><img src={circleCheck} alt={'Task compeleted.'} /></CheckMarkContainer>
                <TextLineTwo color={lineTwoColor}>{props.lineTwoText}</TextLineTwo>
            </SecondLineContainer>
        </ItemContainer>
    )
}

export default TitlebarItem
