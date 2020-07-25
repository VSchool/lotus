import React from "react"
import styled from "styled-components"
import Template from '../components/Template'
// import { Controls } from "@vschool/lotus"

const ControlsExampleContainer = styled.div`
    border: 1px solid lightcoral;
`

// const SectionName = styled.p`
//     margin: 0px 0px 24px 0px;
//     font-family: "aktiv-grotesk";
//     font-style: normal;
//     font-weight: normal;
//     font-size: 20px;
//     line-height: 24px;
//     color: #000000;
// `

// const PropDesc = styled.p`
//     margin: 16px 0px 8px 0px;
//     font-family: "aktiv-grotesk";
//     font-style: normal;
//     font-weight: 300;
//     font-size: 16px;
//     line-height: 19px;
//     color: rgba(0, 0, 0, 0.6);
//     box-sizing: border-box;
// `



export default () => {
    return (
        <ControlsExampleContainer>
            <Template component={'Controls'} />
            {/* <SectionName>Examples</SectionName>
            <PropDesc>'disabledStatus' = false</PropDesc>
            <Controls disabledStatus={false} />
            <PropDesc>'disabledStatus' = true</PropDesc>
            <Controls disabledStatus={true} /> */}
        </ControlsExampleContainer>
    )
}
