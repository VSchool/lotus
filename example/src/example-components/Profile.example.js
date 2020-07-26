import React from "react"
import styled from "styled-components"
// import { useLocation } from 'react-router-dom'
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const profileTemplateObj = {
    componentName: 'Profile',
    componentDescription: 'Here is a short description for this component to go into the template.',
    exampleText: `<Profile userName={string} userEmail={string} userPhone={string} userCourse={string} userTime={string} />`,
    templateProps: [
        {
            propName: 'userName',
            propType: 'String',
            propDescription: 'Status Here is another area for a description that I need to input a placeholder for.',
            options: ['accepts any String']
        },
        {
            propName: 'userEmail',
            propType: 'String',
            propDescription: 'Status Here is another area for a description that I need to input a placeholder for.',
            options: ['accepts any String']
        },
        {
            propName: 'userPhone',
            propType: 'String',
            propDescription: 'Status Here is another area for a description that I need to input a placeholder for.',
            options: ['accepts any String']
        },
        {
            propName: 'userCourse',
            propType: 'String',
            propDescription: 'Status Here is another area for a description that I need to input a placeholder for.',
            options: ['accepts any String']
        },
        {
            propName: 'userTime',
            propType: 'String',
            propDescription: 'Status Here is another area for a description that I need to input a placeholder for.',
            options: ['accepts any String']
        }
    ],
    reactCompnent: ''
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
