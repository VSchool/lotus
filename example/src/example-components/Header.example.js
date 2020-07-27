import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const HeaderTemplateObj = {
    componentName: 'Header',
    componentDescription: 'Give users an exit, a way back, and a way to know their logged in status.',
    exampleText: `<Header />`,
    templateProps: [
        {
            propName: 'n/a',
            propType: 'n/a',
            propDescription: 'This component accepts no props.',
            options: ['n/a']
        }
    ],
    reactComponent: ''
}

const HeaderExampleContainer = styled.div`
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
        <HeaderExampleContainer>
            <ComponentDocTemplate templateInfo={HeaderTemplateObj} />
        </HeaderExampleContainer>
    )
}
