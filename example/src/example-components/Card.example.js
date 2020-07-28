import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const CardTemplateObj = {
    componentName: 'Card',
    componentDescription: 'Let users know where they are in the application process.',
    exampleText: `<Card status={string} />`,
    templateProps: [
        {
            propName: 'status',
            propType: 'String',
            propDescription: 'Sets the "state" of the card.',
            options: ['not-started', 'up-next', 'in-progress', 'completed']
        }
    ],
    reactComponent: ''
}

const CardExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default () => {
    return (
        <CardExampleContainer>
            <ComponentDocTemplate templateInfo={CardTemplateObj} />
        </CardExampleContainer>
    )
}
