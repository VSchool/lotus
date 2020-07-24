import React from "react"
import styled from "styled-components"
import { Titlebar } from "@vschool/lotus"

const TitlebarExampleContainer = styled.div`
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

export default () => {
    return (
        <TitlebarExampleContainer>
            <SectionName>Examples</SectionName>
            <Titlebar stepOne={"active"} stepTwo={"inactive"} stepThree={"locked"} />
        </TitlebarExampleContainer>
    )
}
