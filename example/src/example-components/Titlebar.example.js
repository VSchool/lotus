import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const TitlebarTemplateObj = {
    componentName: "Titlebar",
    componentDescription: "Let users know where they are in the application.",
    exampleText: `<Titlebar stepOne={string} stepTwo={string} stepThree={string} />`,
    templateProps: [
        {
            propName: "blockOneState",
            propType: "Object",
            propDescription: 'Sets the "state" of the first titlebar block.',
            options: ['Object containing state and messages for the first block']
        },
        {
            propName: "blockTwoState",
            propType: "Object",
            propDescription: 'Sets the "state" of the second titlebar block.',
            options: ['Object containing state and messages for the second block']
        },
        {
            propName: "blockThreeState",
            propType: "Object",
            propDescription: 'Sets the "state" of the third titlebar block.',
            options: ['Object containing state and messages for the third block']
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
