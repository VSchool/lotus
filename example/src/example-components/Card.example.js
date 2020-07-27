import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
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
    // let location = useLocation()

    // function copyToClipboard() {
    //     let dummyElement = document.createElement('input')
    //     let tempHostName = 'http://localhost:3000'
    //     let text = `${tempHostName}${location.pathname}`

    //     document.body.appendChild(dummyElement)
    //     dummyElement.value = text
    //     dummyElement.select()
    //     document.execCommand('copy')
    //     document.body.removeChild(dummyElement)

    //     let confirmCopy = document.getElementById('confirmCopy')
    //     confirmCopy.style.display = 'flex'
    // }

    return (
        <CardExampleContainer>
            <ComponentDocTemplate templateInfo={CardTemplateObj} />
        </CardExampleContainer>
    )
}
