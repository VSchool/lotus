import React from "react"
import styled from "styled-components"
import { setStatus } from "./utils"
// import PropTypes from 'prop-types'

// import { setStatus } from './utils'
// import { blue } from '../../colors/blue'
// import { black, white } from '../../colors/gray'

const StatusMessageContainer = styled.div`
    position: relative;
    width: 378px;
    height: 128px;
    display: flex;
    align-items: center;
    background: #e3e8fa;
    border: 2px solid #859feb;
    /* box-sizing: border-box; */
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12),
        0px 12px 17px rgba(0, 0, 0, 0.14);
    /* border: 1px solid lightcoral; */
    /* @media (min-width: 768px) {
        max-width: 1024px;
        height: 56px;
    } */
`

const IndicatorContainer = styled.div`
    min-width: 56px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #456ae2;
    /* blue/primary */

    border: 1px solid #456ae2;
    /* box-sizing: border-box; */
    /* border: 1px dotted gray; */
`

const Indicator = styled.p`
    margin: 0px;
    font-family: "benton-sans";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;
    color: #ffffff;
`

const MessageContainer = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 16px 16px 16px 16px;
    box-sizing: border-box;
    /* border: 1px solid lightcoral; */
`

const Message = styled.p`
    margin: 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #21201f;
    border: 1px solid green;
`

export default function StatusMessage() {
    // console.log(setStatus('success'))

    return (
        <StatusMessageContainer>
            <IndicatorContainer>
                <Indicator>{":)"}</Indicator>
            </IndicatorContainer>
            <MessageContainer>
                <Message>
                    Welcome to your V School Application. Get started by completing your Background
                    Information
                </Message>
            </MessageContainer>
        </StatusMessageContainer>
    )
}

// StatusMessage.propTypes = {
//     status: PropTypes.string.isRequired,
//     message: PropTypes.string
//   }
