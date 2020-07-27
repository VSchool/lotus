import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const ControlsTemplateObj = {
    componentName: 'Controls',
    componentDescription: 'Have users agree to the Terms & Conditions.',
    exampleText: `<Controls disabledStatus={Boolean} />`,
    templateProps: [
        {
            propName: 'disabledStatus',
            propType: 'Boolean',
            propDescription: 'Toggles the checkbox\'s disabled state while processing the request.',
            options: ['true', 'false']
        }
    ],
    reactComponent: ''
}

const ControlsExampleContainer = styled.div`
    /* border: 1px solid black; */
`

export default () => {
    return (
        <ControlsExampleContainer>
            <ComponentDocTemplate templateInfo={ControlsTemplateObj}/>
        </ControlsExampleContainer>
    )
}
