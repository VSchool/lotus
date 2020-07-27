import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
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
