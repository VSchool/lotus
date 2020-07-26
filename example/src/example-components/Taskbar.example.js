import React from "react"
import styled from "styled-components"
import { Taskbar } from "@vschool/lotus"
import { useLocation } from 'react-router-dom'
import clipboardCopyLink from '../assets/images/link.svg'

const newTask = "FSJS - Aptitude Test"
const newTitle = "Required"

const TaskbarExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const TaskbarPageHeaderContainer = styled.div`
    display: flex;
`

const TaskbarPageTitle = styled.p`
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    color: #000000;
`

const ClipboardCopyLinkContainer = styled.div`
    margin: 0px 0px 0px 16px;
    width: 24px;
    height: 24px;
`

const ConfirmCopied = styled.p`
    margin: 0px 0px 0px 8px;
    display: none;
    align-items: center;
    width: 100%;
    height: 24px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
    opacity: .5;
`

const TaskbarPageDescription = styled.p`
    margin: 24px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const TaskbarPageSubHeader = styled.p`
    margin: 40px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #000000;
`

const DisplayContainer = styled.div`
    margin: 32px 0px 0px 0px;
`

const PropNameText = styled.p`
    margin: 0px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #000000;
` 

const PropTypeText = styled.p`
    margin: 8px 0px 8px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #000000;
`

const PropDescriptionText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #000000;
`

const PropDemoContainer = styled.div`
    margin: 16px 0px 0px 0px;
    padding: 8px 16px 8px 16px;
    background: rgba(196, 196, 196, 0.25);
    border-radius: 8px;
`

const PropDemoText = styled.p`
    margin: 0px;
    font-family: Source Code Pro;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #000000;
`

const ExampleContainer = styled.div`
    margin: 16px 0px 0px 0px;
    padding: 8px 0px 8px 0px;
`

const ExampleText = styled.p`
    margin: 24px 0px 8px 0px;
`

export default () => {
    let location = useLocation()

    function copyToClipboard() {
        let dummyElement = document.createElement('input')
        let tempHostName = 'http://localhost:3000'
        let text = `${tempHostName}${location.pathname}`

        document.body.appendChild(dummyElement)
        dummyElement.value = text
        dummyElement.select()
        document.execCommand('copy')
        document.body.removeChild(dummyElement)

        let confirmCopy = document.getElementById('confirmCopy')
        confirmCopy.style.display = 'flex'
    }

    return (
        <TaskbarExampleContainer>
            <TaskbarPageHeaderContainer>
                <TaskbarPageTitle>Taskbar</TaskbarPageTitle>
                <ClipboardCopyLinkContainer onClick={copyToClipboard}>
                    <img src={clipboardCopyLink} alt={'Click to copy url'} />
                </ClipboardCopyLinkContainer>
                <ConfirmCopied id={'confirmCopy'}>Copied to clipboard!</ConfirmCopied>
            </TaskbarPageHeaderContainer>
            <TaskbarPageDescription>A brief description of what the component is used for.</TaskbarPageDescription>

            <DisplayContainer>
                <PropDemoContainer>
                    <PropDemoText>{'<Taskbar title={\'newTitle\'} task={\'newTask\'} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <Taskbar title={newTitle} task={newTask} />
                </ExampleContainer>
            </DisplayContainer>
            <TaskbarPageSubHeader>Props</TaskbarPageSubHeader>

            <DisplayContainer>
                <PropNameText>title</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>accepts an open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{'<Taskbar title={String} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'title={newTitle}'"}</ExampleText>
                    <Taskbar title={newTitle} task={'task'} />
                </ExampleContainer>
            </DisplayContainer>

            <DisplayContainer>
                <PropNameText>task</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>accepts an open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{'<Taskbar task={String} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'task={newTask}'"}</ExampleText>
                    <Taskbar title={'title'} task={newTask} />
                </ExampleContainer>
            </DisplayContainer>
        </TaskbarExampleContainer>
    )
}
