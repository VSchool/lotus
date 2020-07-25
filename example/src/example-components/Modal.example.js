import React from "react"
import styled from "styled-components"
import { useLocation } from 'react-router-dom'
import { Modal } from "@vschool/lotus"
import clipboardCopyLink from '../assets/images/link.svg'


const title = "Are you planning on applying for any V School Scholarships?"
const subtitle = "Complete the  Scholarship Application"
const body = "If you are interested in applying for scholarships, make sure to apply. Then we tell them how many people are usually rewarded with something."

const ModalExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const ModalPageHeaderContainer = styled.div`
    display: flex;
`

const ModalPageTitle = styled.p`
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

const ModalPageDescription = styled.p`
    margin: 24px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const ModalPageSubHeader = styled.p`
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
    margin: 0px 0px 8px 0px;
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
        <ModalExampleContainer>
            <ModalPageHeaderContainer>
                <ModalPageTitle>Modal</ModalPageTitle>
                <ClipboardCopyLinkContainer onClick={copyToClipboard}>
                    <img src={clipboardCopyLink} alt={'Click to copy url'} />
                </ClipboardCopyLinkContainer>
                <ConfirmCopied id={'confirmCopy'}>Copied to clipboard!</ConfirmCopied>
            </ModalPageHeaderContainer>
            <ModalPageDescription>A brief description of what the component is used for.</ModalPageDescription>

            <DisplayContainer>
                <PropDemoContainer>
                    <PropDemoText>{'<Modal title={String} subtitle={String} body={String} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <Modal title={title} subtitle={subtitle} body={body} />
                </ExampleContainer>
            </DisplayContainer>
            <ModalPageSubHeader>Props</ModalPageSubHeader>

            <DisplayContainer>
                <PropNameText>title</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>accepts an open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{'<Modal title={String} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'title={'Title Text'}'"}</ExampleText>
                    <Modal title={'Title Text'} subtitle={'subtitle'} body={'body'} />
                </ExampleContainer>
            </DisplayContainer>

            <DisplayContainer>
                <PropNameText>subtitle</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>accepts an open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{'<Modal subtitle={String} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'subtitle={'Subtitle Text'}'"}</ExampleText>
                    <Modal title={'Title Text'} subtitle={'Subtitle Text'} body={'body'} />
                </ExampleContainer>
            </DisplayContainer>

            <DisplayContainer>
                <PropNameText>body</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>Options: accepts an open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{'<Modal body={String} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'body={'Body Text'}'"}</ExampleText>
                    <Modal title={'Title Text'} subtitle={'Subtitle Text'} body={'Body Text'} />
                </ExampleContainer>
            </DisplayContainer>
        </ModalExampleContainer>
    )
}
