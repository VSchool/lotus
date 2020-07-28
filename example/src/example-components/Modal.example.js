import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const ModalTemplateObj = {
    componentName: "Modal",
    componentDescription: "Prominently display important information to the user.",
    exampleText: `<Modal title={string} subtitle={string} body={string} />`,
    templateProps: [
        {
            propName: "title",
            propType: "String",
            propDescription: "Text string that is displayed in the title of the modal.",
            options: ["accepts any String"]
        },
        {
            propName: "subtitle",
            propType: "String",
            propDescription: "Text string that is displayed in the subtitle of the modal.",
            options: ["accepts any String"]
        },
        {
            propName: "body",
            propType: "String",
            propDescription: "Text string that is displayed in the body of the modal.",
            options: ["accepts any String"]
        }
    ],
    reactComponent: ""
}

const ModalExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default () => {
    return (
        <ModalExampleContainer>
            <ComponentDocTemplate templateInfo={ModalTemplateObj} />
        </ModalExampleContainer>
    )
}
