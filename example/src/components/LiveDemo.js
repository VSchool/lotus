import React from 'react'
import styled from 'styled-components'

import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

import { 
    Controls,
    Card,
    Footer,
    Header,
    Modal,
    Profile,
    StatusChip,
    StatusMessage,
    Taskbar,
    TitlebarItem,
    Titlebar
} from '@vschool/lotus'

const LiveDemoContainer = styled.div`
    margin: 24px 0px 0px 0px;
    max-width: 800px;
    background: #F4F2F2;
`

const scope = {
    Controls,
    Card,
    Footer,
    Header,
    Modal,
    Profile,
    StatusChip,
    StatusMessage,
    Taskbar,
    TitlebarItem,
    Titlebar
}

function createCode(name) {
    switch (name) {
        case 'Controls':
            return (
                `<Controls disabledStatus={false} />`
            )
        case 'Card':
            return (
                `<Card status={'up-next'} />`
            )
        case 'Footer':
            return (
                `<Footer />`
            )
        case 'Header':
            return (
                `<Header />`
            )
        case 'Modal':
            return (
                `<Modal title={'Are you planning on applying for any V School Scholarships? '} subtitle={'Complete the  Scholarship Application'} body={'If you are interested in applying for scholarships, make sure to apply. Then we tell them how many people are usually rewarded with something.'} />`
            )
        case 'Profile':
            return (
                `<Profile userName={'Namey Namerson'} userEmail={'nameynamerson@coolemail.com'} userPhone={'999-999-9999'} userCourse={'Fullstack Javascript'} userTime={'Full - Time'} />`
            )
        case 'Status Chip':
            return (
                `<StatusChip status={'not-started'} />`
            )
        case 'StatusMessage':
            return (
                `<StatusMessage status={'neutral'} message={'Welcome to your V School Application. Get started by completing the tasks below!'} />`
            )
        case 'Taskbar':
            return (
                `<Taskbar title={'Required'} task={'FSJS - Aptitude Test'} />`
            )
        case 'Titlebar Item':
            return (
                `<TitlebarItem status={'active'} title={'Step 1'} subtitle={'Apply'} />`
            )
        case 'Titlebar':
            return (
                `<Titlebar stepOne={'active'} stepTwo={'inactive'} stepThree={'locked'} />`
            )
        default:
            return `There is no spoon.`
    }
}


function LiveDemo(props) {
    const { codeDisplay } = props
    let displayComponent = createCode(codeDisplay.componentName)

    return (
        <LiveDemoContainer>
            <LiveProvider scope={scope} code={displayComponent}>
                <LiveEditor />
                <LiveError />
                <LivePreview />
            </LiveProvider>
        </LiveDemoContainer>
    )
}

export default LiveDemo