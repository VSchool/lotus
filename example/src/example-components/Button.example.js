import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const ButtonTemplateObj = {
    componentName: "Button",
    componentDescription: "Something about a button.",
    exampleText: `<Button buttonStyle={String} buttonSize={String} />`,
    templateProps: [
        {
            propName: "buttonStyle",
            propType: "String",
            propDescription: 'Sets the "state" of the card.',
            options: ["primary-dark", "primary-light"]
        },
        {
            propName: "buttonSize",
            propType: "String",
            propDescription: 'Sets the "state" of the card.',
            options: ["xs", "sm", "md", "lg", "xl"]
        }
    ],
    reactComponent: ""
}

const ButtonExampleContainer = styled.div`
    margin: 0px;
    width: 100%;
    /* border: 1px solid lightcoral; */
`

export default () => (
    <ButtonExampleContainer>
        <ComponentDocTemplate templateInfo={ButtonTemplateObj} />
    </ButtonExampleContainer>
)
