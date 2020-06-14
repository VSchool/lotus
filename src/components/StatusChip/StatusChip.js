import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import { decideChipStatus } from "./utils"
import { black } from "../../colors/gray"

const StatusChipContainer = styled.div`
    padding: 4px 12px;
    border-radius: 4px;
    /* props are given as a callback function whenever needed */
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    display: inline-block;
`

const ChipText = styled.h6`
    line-height: 16px;
    font-size: 10px;
    font-weight: bold;
    font-family: "aktiv-grotesk-extended";
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: ${black};
    margin: 0;
`

function StatusChip({ status, err }) {
    const { border, backgroundColor, text } = decideChipStatus(status, err)

    return (
        <StatusChipContainer backgroundColor={backgroundColor} border={border}>
            <ChipText>{text}</ChipText>
        </StatusChipContainer>
    )
}

StatusChip.propTypes = {
  status: PropTypes.string.isRequired,
  err: PropTypes.string
}

export default StatusChip
