import React from "react"
import styled from "styled-components"

import { StatusChip } from "../StatusChip"
import { findCardStatus } from "./utils"

import * as colors from "../../colors"

const CardContainer = styled.div`
    position: relative;
    width: 184px;
    height: 194px;
    background: #FFFFFF;
    border: 1px solid #D8D4CF;
    box-sizing: border-box;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14), inset 0px 4px 0px #D8D4CF;

    /* @media (max-width: 768px) {
        max-width: 184px;
    } */
`

const TitleText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #21201F;
    border: 1px dotted gray;
`

const StatusChipWrapper = styled.div`
    border: 1px dotted red;
`

function Card(props) {
    const {
        cardStatus,
        titleText,
        messageText,
        topBorder,
        rightBorder,
        bottomBorder,
        leftBorder
    } = findCardStatus(props.status)
    console.log(props)
    return (
        <CardContainer>
            <TitleText>{'Initial Application'}</TitleText>
            <StatusChipWrapper><StatusChip status={'not-started'} /></StatusChipWrapper>
        </CardContainer>
    )
}

export default Card
