import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const TitlebarTemplateObj = {
    componentName: "Titlebar",
    componentDescription: "Let users know where they are in the application.",
    exampleText: `<Titlebar blockOneState={string} blockTwoState={string} blockThreeState={string} />`,
    templateProps: [
        {
            propName: "blockOneState",
            propType: 'Object',
            propDescription: 'Sets the "state" of the first titlebar block.',
            options: ['Object containing state and text']
        },
        {
            propName: "blockTwoState",
            propType: "Object",
            propDescription: 'Sets the "state" of the second titlebar block.',
            options: ['Object containing state and text']
        },
        {
            propName: "blockThreeState",
            propType: "Object",
            propDescription: 'Sets the "state" of the third titlebar block.',
            options: ['Object containing state and text']
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
