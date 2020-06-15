import React from 'react'
import styled from 'styled-components'

import { StatusChip } from '../StatusChip'

function Card() {

    const CardContainer = styled.div`
        position: relative;
        width: 354px;
        height: 152px;
        background: #FFFFFF;
        border: 1px solid #D8D4CF;
        box-sizing: border-box;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
    `

    const StatusIndicatorContainer = styled.div`
        postion: absolute;
        left: 0;
        top: 0;
        width: 100%;
    `

    const StatusIndicator = styled.div`
        width: 100%;
        height: 4px;
        // position: relative;
        // top: 0;
        // left: 0;
        background: #D8D4CF;
    `

    const CardSectionContainer = styled.div`
        box-sizing: border-box;
        width: 100%;
        // height: 100%;
        position: absolute;
        top: 24px;
        left: 0;
        padding: 0px 24px 0px 24px;
        background: white;
    `

    const CardTitle = styled.h5`
        font-family: Aktiv Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        width: 175px;
        height: 26px;
        margin: 0px;
        display: flex;
        align-items: center;
        // border: 1px solid red;
    `

    const StatusChipContainer = styled.div`
        box-sizing: border-box;
        margin: 0px;
        width: 100%;
        position: absolute;
        top: 64px;
        padding: 0px 24px 0px 24px;
        // background: red;

    `

    const CardBottomWrapper = styled.div`
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: absolute;
        top: 106px;
        left: 0;
        padding: 0px 24px 0px 24px;

        // border: 1px solid blue;
    `

    const CardMessage = styled.p`
        margin: 0px;
        font-family: Aktiv Grotesk;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 24px;
        color: #21201F;
        // border: 1px solid red;
    `

    const CardStartButton = styled.button`
        font-family: Aktiv Grotesk;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #456AE2;
        border: none;
        background: none;
    `

    return (
        <CardContainer>
            <StatusIndicatorContainer>
                <StatusIndicator />
            </StatusIndicatorContainer>
            <CardSectionContainer>
                <CardTitle>{`Initial Application`}</CardTitle>
            </CardSectionContainer>
            <StatusChipContainer>
                <StatusChip status={`not-started`} />
            </StatusChipContainer>
            <CardBottomWrapper>
                <CardMessage>{`Messaging about what needs to be completed.`}</CardMessage>
                <CardStartButton>{`Start`}</CardStartButton>
            </CardBottomWrapper>
        </CardContainer>
    )
}

export default Card

