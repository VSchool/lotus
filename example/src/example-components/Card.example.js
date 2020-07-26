import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const CardTemplateObj = {
    componentName: 'Card',
    componentDescription: 'Here is a short description for this component to go into the template.',
    exampleText: `<Card status={string} />`,
    templateProps: [
        {
            propName: 'status',
            propType: 'String',
            propDescription: 'Status Here is another area for a description that I need to input a placeholder for.',
            options: ['not-started', 'up-next', 'in-progress', 'completed']
        }
    ],
    reactCompnent: ''
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
