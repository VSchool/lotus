import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from '../components/ComponentDocTemplate'

// const title = "Are you planning on applying for any V School Scholarships?"
// const subtitle = "Complete the  Scholarship Application"
// const body = "If you are interested in applying for scholarships, make sure to apply. Then we tell them how many people are usually rewarded with something."
const ModalTemplateObj = {
    componentName: 'Modal',
    componentDescription: 'Prominently display important information to the user.',
    exampleText: `<Modal title={string} subtitle={string} body={string} />`,
    templateProps: [
        {
            propName: 'title',
            propType: 'String',
            propDescription: 'Text string that is displayed in the title of the modal.',
            options: ['accepts any String']
        },
        {
            propName: 'subtitle',
            propType: 'String',
            propDescription: 'Text string that is displayed in the subtitle of the modal.',
            options: ['accepts any String']
        },{
            propName: 'body',
            propType: 'String',
            propDescription: 'Text string that is displayed in the body of the modal.',
            options: ['accepts any String']
        }
    ],
    reactComponent: ''
}

const ModalExampleContainer = styled.div`
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
        <ModalExampleContainer>
            <ComponentDocTemplate templateInfo={ModalTemplateObj} />
        </ModalExampleContainer>
    )
}
