import React from "react"
import styled from "styled-components"
import { StatusMessage } from "@vschool/lotus"
import clipboardCopyLink from '../assets/images/link.svg'
import { useLocation } from 'react-router-dom'



const neutralMessage =
    "Welcome to your V School Application. Get started by completing the tasks below!"
const successMessage = "Congrats! You’ve successfully subscribed to our newsletter."
const warningMessage = "Your “Portfolio” project is due in 7 days."
const failMessage = "Your “Empathy Map” assignment is 5 days late. Get after it!"

const StatusMessageContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const StatusMessagePageHeaderContainer = styled.div`
    display: flex;
`

const StatusMessagePageTitle = styled.p`
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

const StatusMessagePageDescription = styled.p`
    margin: 24px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const StatusMessagePageSubHeader = styled.p`
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
        <StatusMessageContainer>
            <StatusMessagePageHeaderContainer>
                <StatusMessagePageTitle>Status Message</StatusMessagePageTitle>
                <ClipboardCopyLinkContainer onClick={copyToClipboard}>
                    <img src={clipboardCopyLink} alt={'Click to copy url'} />
                </ClipboardCopyLinkContainer>
                <ConfirmCopied id={'confirmCopy'}>Copied to clipboard!</ConfirmCopied>
            </StatusMessagePageHeaderContainer>
            <StatusMessagePageDescription>A brief description of what the component is used for.</StatusMessagePageDescription>

            <DisplayContainer>
                <PropDemoContainer>
                    <PropDemoText>{'<StatusMessage status={\'neutral\'} message={neutralMessage} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <StatusMessage status={'neutral'} message={neutralMessage} />
                </ExampleContainer>
            </DisplayContainer>
            <StatusMessagePageSubHeader>Props</StatusMessagePageSubHeader>

            <DisplayContainer>
                <PropNameText>status</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>'neutral', 'success', 'warning', 'fail'</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{'<StatusMessage status={String} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'status={success}'"}</ExampleText>
                    <StatusMessage status={'success'} message={successMessage} />
                    <ExampleText>{"'status={neutral}'"}</ExampleText>
                    <StatusMessage status={'neutral'} message={neutralMessage} />
                    <ExampleText>{"'status={warning}'"}</ExampleText>
                    <StatusMessage status={'warning'} message={warningMessage} />
                    <ExampleText>{"'status={fail}'"}</ExampleText>
                    <StatusMessage status={'fail'} message={failMessage} />
                </ExampleContainer>
            </DisplayContainer>

            <DisplayContainer>
                <PropNameText>message</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>accepts and open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{'<StatusMessage message={String} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'message={'I am a place holder.'}'"}</ExampleText>
                    <StatusMessage status={'neutral'} message={'I am a placeholder.'} />
                </ExampleContainer>
            </DisplayContainer>
        </StatusMessageContainer>
    )
}
