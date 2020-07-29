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
    background: ${props => props.background};
    border: ${props => props.border};
    box-sizing: border-box;
    border-radius: 4px;
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
    color: ${colors.black};
`

function StatusChip({status}) {
    const { border, backgroundColor, text } = decideChipStatus(status)

    return (
        <StatusChipContainer background={backgroundColor} border={border}>
            <ChipText>{text}</ChipText>
        </StatusChipContainer>
    )
}

// StatusChip.propTypes = {
//     status: PropTypes.string.isRequired
// }

export default StatusChip
