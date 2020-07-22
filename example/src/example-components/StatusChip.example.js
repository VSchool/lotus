import React from "react"
import styled from 'styled-components'
import { StatusChip } from "@vschool/lotus"

const StatusChipContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const SectionName = styled.p`
    margin: 0px 0px 24px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const PropDesc = styled.p`
    margin: 16px 0px 8px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
`

export default () => {
    return (
        <StatusChipContainer>
            <SectionName>Examples</SectionName>
            <PropDesc>'in-progress'</PropDesc>
            <StatusChip status={"in-progress"} />
            <PropDesc>'not-started'</PropDesc>
            <StatusChip status={"not-started"} />
            <PropDesc>'completed'</PropDesc>
            <StatusChip status={"completed"} />
            <PropDesc>'up-next'</PropDesc>
            <StatusChip status={"up-next"} />
            <PropDesc>'err'</PropDesc>
            <StatusChip status={"err"} err={"I am a custom error message"} />
        </StatusChipContainer>
    )
}



