import React from "react"
import styled from "styled-components"
import { Controls } from "@vschool/lotus"
import { useLocation } from 'react-router-dom'
import clipboardCopyLink from '../assets/images/link.svg'

const ControlsExampleContainer = styled.div`
    /* border: 1px solid black; */
`

const ControlsPageHeaderContainer = styled.div`
    display: flex;
`

const ControlsPageTitle = styled.p`
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

const ControlsPageDescription = styled.p`
    margin: 24px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const ControlsPageSubHeader = styled.p`
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
    font-size: 20px;
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
        <ControlsExampleContainer>
            <ControlsPageHeaderContainer>
                <ControlsPageTitle>Controls</ControlsPageTitle>
                <ClipboardCopyLinkContainer onClick={copyToClipboard}>
                    <img src={clipboardCopyLink} alt={'Click to copy url'} />
                </ClipboardCopyLinkContainer>
                <ConfirmCopied id={'confirmCopy'}>Copied to clipboard!</ConfirmCopied>
            </ControlsPageHeaderContainer>
            <ControlsPageDescription>A brief description of what the component is used for.</ControlsPageDescription>
            
            <DisplayContainer>
                <PropDemoContainer>
                    <PropDemoText>{'<Controls disabledStatus={false} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <Controls disabledStatus={false} />
                </ExampleContainer>
            </DisplayContainer>
            <ControlsPageSubHeader>Props</ControlsPageSubHeader>

            <DisplayContainer>
                <PropNameText>disabledStatus</PropNameText>
                <PropTypeText>type: Boolean</PropTypeText>
                <PropDescriptionText>true, false</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{'<Controls disabledStatus={Boolean} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'disabledStatus={true}'"}</ExampleText>
                    <Controls disabledStatus={true} />
                    <ExampleText>{"'disabledStatus={false}'"}</ExampleText>
                    <Controls disabledStatus={false} />
                </ExampleContainer>
            </DisplayContainer>
        </ControlsExampleContainer>
    )
}
