import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const TitlebarTemplateObj = {
    componentName: "Titlebar",
    componentDescription: "Let users know where they are in the application.",
    exampleText: `<Titlebar stepOne={string} stepTwo={string} stepThree={string} />`,
    templateProps: [
        {
            propName: "stepOne",
            propType: "String",
            propDescription: 'Sets the "state" of the first titlebar item.',
            options: ["active", "inactive", "locked"]
        },
        {
            propName: "stepTwo",
            propType: "String",
            propDescription: 'Sets the "state" of the second titlebar item.',
            options: ["active", "inactive", "locked"]
        },
        {
            propName: "stepThree",
            propType: "String",
            propDescription: 'Sets the "state" of the third titlebar item.',
            options: ["active", "inactive", "locked"]
        }
    ],
    reactComponent: ""
}

const TitlebarExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default () => {
    return (
        <TitlebarExampleContainer>
            <ComponentDocTemplate templateInfo={TitlebarTemplateObj} />
        </TitlebarExampleContainer>
    )
}
