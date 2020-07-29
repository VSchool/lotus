import React from "react"
import styled from "styled-components"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

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
} from "@vschool/lotus"

import { LiveDemoTheme } from './LiveDemo.utils'

const LiveDemoContainer = styled.div`
    margin: 24px 0px 0px 0px;
    max-width: 100%;
    /* display: flex; */
    /* flex-direction: column-reverse; */
    /* background: #f4f2f2; */
    /* border: 1px solid lightcoral; */
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
        case "Controls":
            return `<Controls disabledStatus={false} />`
        case "Card":
            return `<Card \n  status={'not-started'} \n  title={'Initial application'} \n  message={'Messaging about what needs to be completed '} \n/>`
        case "Footer":
            return `<Footer />`
        case "Header":
            return `<Header userLoggedIn={false} />`
        case "Modal":
            return `<Modal \n  title={'Title text'} \n  subtitle={'Subtitle text'} \n  body={'Body text area.'} \n/>`
        case "Profile":
            return `<Profile \n  userName={'Namey Namerson'} \n  userEmail={'nameynamerson@coolemail.com'} \n  userPhone={'999-999-9999'} \n  userCourse={'Fullstack Javascript'} \n  userTime={'Full - Time'} \n/>`
        case "Status Chip":
            return `<StatusChip status={'not-started'} />`
        case "Status Message":
            return `<StatusMessage \n  status={'neutral'} \n  message={'Welcome to your V School Application. Get started!'} \n/>`
        case "Taskbar":
            return `<Taskbar \n  firstLineMessage={'Required'} \n  secondLineMessage={'FSJS - Aptitude Test'} \n/>`
        case "Titlebar Item":
            return `<TitlebarItem \n  itemState={'active'} \n  firstLineMessage={'first'} \n  secondLineMessage={'last'} \n/>`
        case "Titlebar":
            return `<Titlebar\n  blockOne={{blockState: 'active', firstLine: 'Step 1', secondLine: 'Background'}}\n  blockTwo={{blockState: 'inactive', firstLine: 'Step 2', secondLine: 'Application'}}\n  blockThree={{blockState: 'locked', firstLine: 'Step 3', secondLine: 'Enrollment'}} \n/>`
        default:
            return `There is no spoon.`
    }
}

function LiveDemo(props) {
    const { codeDisplay } = props
    let displayComponent = createCode(codeDisplay.componentName)

    return (
        <LiveDemoContainer>
            <LiveProvider scope={scope} code={displayComponent} theme={LiveDemoTheme}>
                <LiveEditor />
                <LiveError />
                <LivePreview />
            </LiveProvider>
        </LiveDemoContainer>
    )
}

export default LiveDemo
