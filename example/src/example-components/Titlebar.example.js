import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const TitlebarTemplateObj = {
    componentName: 'Titlebar',
    componentDescription: 'Let users know where they are in the application.',
    exampleText: `<Titlebar stepOne={string} stepTwo={string} stepThree={string} />`,
    templateProps: [
        {
            propName: 'stepOne',
            propType: 'String',
            propDescription: 'Sets the "state" of the first titlebar item.',
            options: ['active', 'inactive', 'locked']
        },
        {
            propName: 'stepTwo',
            propType: 'String',
            propDescription: 'Sets the "state" of the second titlebar item.',
            options: ['active', 'inactive', 'locked']
        },
        {
            propName: 'stepThree',
            propType: 'String',
            propDescription: 'Sets the "state" of the third titlebar item.',
            options: ['active', 'inactive', 'locked']
        }
    ],
    reactComponent: ''
}

const TitlebarExampleContainer = styled.div`
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
        <TitlebarExampleContainer>
            <ComponentDocTemplate templateInfo={TitlebarTemplateObj} />
        </TitlebarExampleContainer>
    )
}
