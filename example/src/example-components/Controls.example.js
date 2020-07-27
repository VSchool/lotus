import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const ControlsTemplateObj = {
    componentName: 'Controls',
    componentDescription: 'Controls1Here is a short description for this component to go into the template.',
    exampleText: `<Controls disabledStatus={Boolean} />`,
    templateProps: [
        {
            propName: 'disabledStatus',
            propType: 'Boolean',
            propDescription: 'Disabled Status Here is another area for a description that I need to input a placeholder for.',
            options: ['true', 'false']
        }
    ],
    reactComponent: ''
}

const ControlsExampleContainer = styled.div`
    /* border: 1px solid black; */
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
        <ControlsExampleContainer>
            <ComponentDocTemplate templateInfo={ControlsTemplateObj}/>
        </ControlsExampleContainer>
    )
}
