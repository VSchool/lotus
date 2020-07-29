import React from "react"
import styled from "styled-components"
// import PropTypes from "prop-types"
import { decideChipStatus } from "./utils"
import * as colors from "../../colors"

const StatusChipContainer = styled.div`
    position: relative;
    width: 112px;
    height: 24px;
    padding: 2px 6px 2px 6px;
    /* background: #F0EEEB; */
    background: ${props => props.background};
    border: ${props => props.border};
    /* border: 1px solid #A09C96; */
    box-sizing: border-box;
    border-radius: 4px;

    /* @media (max-width: 768px) {
        margin: 8px 0px 8px 0px;
    } */
`

const ChipText = styled.p`
    margin: 0px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #21201F;
    /* border: 1px solid lightcoral; */
`

function StatusChip(props) {
    console.log(props.status)
    const { border, backgroundColor, text } = decideChipStatus(props.status)

    return (
        <StatusChipContainer background={backgroundColor} border={border}>
            <ChipText>{text}</ChipText>
        </StatusChipContainer>
    )
}

// StatusChip.propTypes = {
//     status: PropTypes.string.isRequired,
//     err: PropTypes.string
// }

export default StatusChip
