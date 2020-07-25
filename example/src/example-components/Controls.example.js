import React from "react"
import styled from "styled-components"
import { Controls } from "@vschool/lotus"


const ControlsExampleContainer = styled.div`
    border: 1px solid lightcoral;
`

export default () => {
    // console.log(componentObject)
    return (
        <ControlsExampleContainer>
            {/* <SectionName>Examples</SectionName> */}
            {/* <PropDesc>'disabledStatus' = false</PropDesc> */}
            <Controls disabledStatus={false} />
            {/* <PropDesc>'disabledStatus' = true</PropDesc> */}
            <Controls disabledStatus={true} />
        </ControlsExampleContainer>
    )
}
