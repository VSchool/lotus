import React from "react"
import styled from "styled-components"
import { useLocation } from 'react-router-dom'
import { Profile } from "@vschool/lotus"

import clipboardCopyLink from '../assets/images/link.svg'


const ProfileExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const ProfilePageHeaderContainer = styled.div`
    display: flex;
`

const ProfilePageTitle = styled.p`
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

const ProfilePageDescription = styled.p`
    margin: 24px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const ProfilePageSubHeader = styled.p`
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
        <ProfileExampleContainer>
            <ProfilePageHeaderContainer>
                <ProfilePageTitle>Profile</ProfilePageTitle>
                <ClipboardCopyLinkContainer onClick={copyToClipboard}>
                    <img src={clipboardCopyLink} alt={'Click to copy url'} />
                </ClipboardCopyLinkContainer>
                <ConfirmCopied id={'confirmCopy'}>Copied to clipboard!</ConfirmCopied>
            </ProfilePageHeaderContainer>
            <ProfilePageDescription>A brief description of what the component is used for.</ProfilePageDescription>

            <DisplayContainer>
                <PropDemoContainer>
                    <PropDemoText>{'<Profile userName={String} userEmail={String} userPhone={String} userCourse={String} userTime={String} />'}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <Profile 
                        userName={'Namey Namerson'}
                        userEmail={'nameynamerson@coolemail.com'}
                        userPhone={'999-999-9999'}
                        userCourse={'Fullstack JavaScript'}
                        userTime={'Full'}
                    />
                </ExampleContainer>
            </DisplayContainer>
            <ProfilePageSubHeader>Props</ProfilePageSubHeader>

            <DisplayContainer>
                <PropNameText>userName</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>accepts any open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{"<Profile userName={'Namey Namerson} />"}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'userName={'Namey Namerson'}'"}</ExampleText>
                    <Profile userName={'Namey Namerson'} />
                </ExampleContainer>
            </DisplayContainer>

            <DisplayContainer>
                <PropNameText>userEmail</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>accepts any open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{"<Profile userEmail={'nameynamerson@coolemail.com'} />"}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'userEmail={'nameynamerson@coolemail.com'}'"}</ExampleText>
                    <Profile userEmail={'nameynamerson@coolemail.com'} />
                </ExampleContainer>
            </DisplayContainer>

            <DisplayContainer>
                <PropNameText>userPhone</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>accepts any open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{"<Profile userPhone={'999-999-9999'} />"}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'userPhone={'999-999-9999'}'"}</ExampleText>
                    <Profile userPhone={'999-999-9999'} />
                </ExampleContainer>
            </DisplayContainer>

            <DisplayContainer>
                <PropNameText>userCourse</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>accepts any open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{"<Profile userCourse={'Fullstack Javascript'} />"}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'userCourse={'Fullstack Javascript'}'"}</ExampleText>
                    <Profile userCourse={'Fullstack Javascript'} />
                </ExampleContainer>
            </DisplayContainer>

            <DisplayContainer>
                <PropNameText>userTime</PropNameText>
                <PropTypeText>type: String</PropTypeText>
                <PropDescriptionText>accepts any open String</PropDescriptionText>
                <PropDemoContainer>
                    <PropDemoText>{"<Profile userTime={'Full - Time'} />"}</PropDemoText>
                </PropDemoContainer>
                <ExampleContainer>
                    <ExampleText>{"'userTime={'Full - Time'}'"}</ExampleText>
                    <Profile userTime={'Full - Time'} />
                </ExampleContainer>
            </DisplayContainer>
        </ProfileExampleContainer>
    )
}
