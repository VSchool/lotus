import React from "react"
import styled from "styled-components"
// import { ComponentDisplayContext } from '../providers/Store'
import { Card } from "@vschool/lotus"

const CardExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const SectionName = styled.p`
    margin: 0px 0px 24px 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const PropDesc = styled.p`
    margin: 16px 0px 8px 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
`

export default () => {
    return (
        <CardExampleContainer>
            <SectionName>Examples</SectionName>
            <PropDesc>'not-started'</PropDesc>
            <Card status={"not-started"} />
            <PropDesc>'up-next'</PropDesc>
            <Card status={"up-next"} />
            <PropDesc>'in-progress'</PropDesc>
            <Card status={"in-progress"} />
            <PropDesc>'completed'</PropDesc>
            <Card status={"completed"} />
        </CardExampleContainer>
    )
}
