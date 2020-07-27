import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const StatusChipTemplateObj = {
    componentName: 'Status Chip',
    componentDescription: 'Here is a short description for this component to go into the template.',
    exampleText: `<StatusChip status={string} />`,
    templateProps: [
        {
            propName: 'status',
            propType: 'String',
            propDescription: 'Status Here is another area for a description that I need to input a placeholder for.',
            options: ['in-progress', 'not-started', 'completed','up-next', 'err']
        }
    ],
    reactComponent: ''
}

const StatusChipContainer = styled.div`
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
        <StatusChipContainer>
            <ComponentDocTemplate templateInfo={StatusChipTemplateObj} />
        </StatusChipContainer>
    )
}
