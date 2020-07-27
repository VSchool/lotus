import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const StatusMessageTemplateObj = {
    componentName: 'StatusMessage',
    componentDescription: 'Here is a short description for this component to go into the template.',
    exampleText: `<StatusMessage status={string} />`,
    templateProps: [
        {
            propName: 'status',
            propType: 'String',
            propDescription: 'Status Here is another area for a description that I need to input a placeholder for.',
            options: ['neutral', 'success', 'warning', 'fail']
        }
    ],
    reactComponent: ''
}
// const neutralMessage =
//     "Welcome to your V School Application. Get started by completing the tasks below!"
// const successMessage = "Congrats! You’ve successfully subscribed to our newsletter."
// const warningMessage = "Your “Portfolio” project is due in 7 days."
// const failMessage = "Your “Empathy Map” assignment is 5 days late. Get after it!"

const StatusMessageContainer = styled.div`
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
        <StatusMessageContainer>
            <ComponentDocTemplate templateInfo={StatusMessageTemplateObj} />
        </StatusMessageContainer>
    )
}
