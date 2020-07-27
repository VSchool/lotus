import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const TitlebarItemTemplateObj = {
    componentName: 'Titlebar Item',
    componentDescription: 'Assist the titlebar component by displaying each application process step.',
    exampleText: `<TitlebarItem status={string} title={string} subtitle={string} />`,
    templateProps: [
        {
            propName: 'status',
            propType: 'String',
            propDescription: 'Sets the "state" of the titlebar item.',
            options: ['active', 'inactive', 'locked']
        },
        {
            propName: 'title',
            propType: 'String',
            propDescription: 'Text string that is displayed in the title of the titlebar item.',
            options: ['accepts any String']
        },
        {
            propName: 'subtitle',
            propType: 'String',
            propDescription: 'Text string that is displayed in the subtitle of the titlebar item.',
            options: ['accepts any String']
        }
    ],
    reactComponent: ''
}

const TitlebarItemExmpleContainer = styled.div`
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
        <TitlebarItemExmpleContainer>
        <ComponentDocTemplate templateInfo={TitlebarItemTemplateObj} />
        </TitlebarItemExmpleContainer>
    )
}
