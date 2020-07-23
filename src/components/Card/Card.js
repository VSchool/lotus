import React from "react"
import styled from "styled-components"

import { StatusChip } from "../StatusChip"
import { findCardStatus } from "./utils"

import { black, gray, white } from "../../colors/gray"
import { blue } from "../../colors/blue"

const CardContainer = styled.div`
    position: relative;
    width: 352px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.14);

    @media (max-width: 768px) {
        max-width: 184px;
    }
`

const CardWrapper = styled.div`
    background: ${white};
    width: 100%;
    padding: 24px 24px 24px 24px;
    box-sizing: border-box;
    border-top: ${props => props.borderTop};
    border-right: ${props => props.borderRight};
    border-bottom: ${props => props.borderBottom};
    border-left: ${props => props.borderLeft};

    @media (max-width: 768px) {
        padding: 16px 16px 16px 16px;
    }
`

const CardTitle = styled.h5`
    margin: 0px 0px 8px 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: ${black};

    @media (max-width: 768px) {
        margin: 0px 0px 8px 0px;
        font-size: 16px;
        line-height: 24px;
    }
`

const BottomWrapper = styled.div`
    margin: 8px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        margin: 8px 0px 0px 0px;
        flex-direction: column;
        align-items: start;
    }
`

const CardMessage = styled.p`
    margin: 0px;
    max-width: 216px;
    display: flex;
    align-items: center;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 24px;
    color: ${black};

    @media (max-width: 768px) {
        margin: 0px 0px 8px 0px;
    }
`

const TextButton = styled.button`
    display: flex;
    align-items: baseline;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${blue.base};
    border: none;
    background: none;

    @media (max-width: 768px) {
        margin: 8px 0px 0px 0px;
        line-height: 16px;
    }
`

function Card({ status }) {
    const {
        cardStatus,
        titleText,
        messageText,
        topBorder,
        rightBorder,
        bottomBorder,
        leftBorder
    } = findCardStatus(status)
    return (
        <CardContainer>
            <CardWrapper
                borderTop={topBorder}
                borderRight={rightBorder}
                borderBottom={bottomBorder}
                borderLeft={leftBorder}
            >
                <CardTitle>{titleText}</CardTitle>
                <StatusChip status={cardStatus} />
                <BottomWrapper>
                    <CardMessage>{messageText}</CardMessage>
                    <TextButton>Start</TextButton>
                </BottomWrapper>
            </CardWrapper>
        </CardContainer>
    )
}

export default Card
