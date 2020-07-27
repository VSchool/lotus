import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const profileTemplateObj = {
    componentName: 'Profile',
    componentDescription: 'Display the user\'s profile information.',
    exampleText: `<Profile userName={string} userEmail={string} userPhone={string} userCourse={string} userTime={string} />`,
    templateProps: [
        {
            propName: 'userName',
            propType: 'String',
            propDescription: 'Text string that displays the user\'s name.',
            options: ['accepts any String']
        },
        {
            propName: 'userEmail',
            propType: 'String',
            propDescription: 'Text string that displays the user\'s email address.',
            options: ['accepts any String']
        },
        {
            propName: 'userPhone',
            propType: 'String',
            propDescription: 'Text string that displays the user\'s phone number.',
            options: ['accepts any String']
        },
        {
            propName: 'userCourse',
            propType: 'String',
            propDescription: 'Text string that displays the user\'s course they are enrolled in.',
            options: ['accepts any String']
        },
        {
            propName: 'userTime',
            propType: 'String',
            propDescription: 'Text string that displays the user\'s time committment level.',
            options: ['accepts any String']
        }
    ],
    reactComponent: ''
}

const ProfileExampleContainer = styled.div`
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
        <ProfileExampleContainer>
            <ComponentDocTemplate templateInfo={profileTemplateObj} />
        </ProfileExampleContainer>
    )
}
