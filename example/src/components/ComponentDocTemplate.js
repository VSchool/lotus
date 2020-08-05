import React from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import LiveDemo from "./LiveDemo"
import Table from './Table'
import copyLink from "../assets/images/link.svg"

const DocTemplateContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const TemplateHeaderContainer = styled.div`
    margin: 0px 0px 0px 0px;
    width: 100%;
    display: flex;
    /* border: 1px solid blue; */
`

const TemplateTitle = styled.h3`
    margin: 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 64px;
    color: #000000;
    /* border: 1px dotted gray; */
`

const CopyLinkContainer = styled.div`
    margin: 0px 0px 0px 16px;
    width: 24px;
    height: 24px;
    display: flex;
    cursor: pointer;
    /* border: 1px dotted green; */
`

const TemplateDescriptionContainer = styled.div`
    margin: 16px 0px 0px 0px;
    height: 48px;
    /* border: 1px dashed green; */
`

const TemplateDescriptionText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    /* border: 1px solid gray; */
`

const HiddenParagraph = styled.p`
    margin: 0px 0px 0px 8px;
    height: 24px;
    display: none;
    justify-content:center;
    align-items: center;
    font-family: "aktiv-grotesk";
    font-style: light;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
`

function ComopnentDocTemplate(props) {
    let location = useLocation()

    function copyToClipboard() {
        let copiedConfirmation = document.getElementById('chuckles')
        let pathName = location.pathname
        let dummyElement = document.createElement("input")
        let tempHostName = "http://localhost:3000"
        let text = `${tempHostName}${pathName}`

        document.body.appendChild(dummyElement)
        dummyElement.value = text
        dummyElement.select()
        document.execCommand("copy")
        document.body.removeChild(dummyElement)

        function hideDiv() {
            copiedConfirmation.style.display = 'none'
        }
        copiedConfirmation.style.display = 'flex'
        setTimeout(hideDiv, 1500)
    }

    const { componentName, componentDescription } = props.templateInfo

    return (
        <DocTemplateContainer>
            <TemplateHeaderContainer>
                <TemplateTitle>{componentName}</TemplateTitle>
                <CopyLinkContainer onClick={copyToClipboard}>
                    <img src={copyLink} alt={"Click to copy URL for this component."} />
                </CopyLinkContainer>
                <HiddenParagraph id={'chuckles'}>Copied to clipboard!</HiddenParagraph>

            </TemplateHeaderContainer>
            <TemplateDescriptionContainer>
                <TemplateDescriptionText>{componentDescription}</TemplateDescriptionText>
            </TemplateDescriptionContainer>
            <Table data={props.templateInfo} />
            <LiveDemo codeDisplay={props.templateInfo} />
        </DocTemplateContainer>
    )
}

export default ComopnentDocTemplate
