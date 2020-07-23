import React from "react"
import styled from "styled-components"
import { Taskbar } from "@vschool/lotus"

const TaskbarExampleContainer = styled.div`
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

const newTask = "FSJS - Aptitude Test"
const newTitle = "Required"

export default () => {
    return (
        <TaskbarExampleContainer>
            <SectionName>Examples</SectionName>
            <PropDesc>'not-started'</PropDesc>
            <Taskbar title={newTitle} task={newTask} />
        </TaskbarExampleContainer>
    )
}
