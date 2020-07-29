import React from "react"
import styled from "styled-components"
import * as colors from "../../colors"
import { displayItemState } from "./utils"
import circleCheck from "../../assets/icons/circleCheck.svg"

const ItemContainer = styled.div`
    position: relative;
    max-width: 144px;
    min-height: 48px;
    padding: 10px 20px 10px 18px;
    background: #21201F;
    box-sizing: border-box;
    /* green/lighter */
    border: ${props => props.border};
    /* border: 4px solid #99CEC1; */
    opacity: ${props => props.opacity};

    /* @media (min-width: 768px) {
        width: 400px;
        padding: 0px 128px 0px 88px;
    } */
`

const TextLineOne = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${props => props.color};
    /* color: #D8D4CF; */
    /* border: 1px dotted white; */
`

const SecondLineContainer = styled.div`
    display: flex;
    align-items: center;
    /* border: 1px solid white; */
`

const CheckMarkContainer = styled.div`
    margin: 0px 8px 0px 0px;
    width: 13px;
    height: 13px;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    /* border: 1px dotted lightcoral; */
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
    /* color: #FBF9F7; */
    /* border: 1px dotted white; */
`

function TitlebarItem(props) {
    const {
        border,
        opacity,
        lineOneColor,
        lineTwoColor,
        checkmarkDisplay
    } = displayItemState(props.titlebarItemState)
    // console.log(checkmarkDisplay)

    return (
        <ItemContainer border={border} opacity={opacity}>
            <TextLineOne color={lineOneColor}>{'Step 1'}</TextLineOne>
            <SecondLineContainer>
                <CheckMarkContainer display={checkmarkDisplay}><img src={circleCheck} alt={'Task compeleted.'} /></CheckMarkContainer>
                <TextLineTwo color={lineTwoColor}>{'Apply'}</TextLineTwo>
            </SecondLineContainer>
        </ItemContainer>
    )
}

export default TitlebarItem
