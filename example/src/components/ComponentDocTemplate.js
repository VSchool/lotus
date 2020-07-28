import React from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import LiveDemo from "./LiveDemo"

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
    /* border: 1px dotted green; */
`

const TemplateDescriptionContainer = styled.div`
    margin: 16px 0px 0px 0px;
    height: 72px;
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

const TemplateExampleContainer = styled.div`
    margin: 16px 0px 0px 0px;
    max-width: 768px;
    /* height: 56px; */
    padding: 8px 16px 8px 16px;
    background: #f4f2f2;
    border-left: 4px solid #59af9b;

    /* border: 1px solid gold; */
`

const TemplateExampleText = styled.p`
    margin: 0px;
    width: 100%;
    font-family: Source Code Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    /* border: 1px solid orange; */
`

const TemplatePropsContainer = styled.div`
    margin: 56px 0px 0px 0px;
    /* border: 1px solid lightcoral; */
`

const PropsHeaderText = styled.h3`
    margin: 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #000000;
    /* border: 1px dotted gray; */
`

const PropsInfoContainer = styled.div`
    margin: 40px 0px 0px 0px;
    /* display: flex; */
    /* flex-direction: column; */
    /* border: 1px solid lightblue; */
`

const InfoWrapper = styled.div`
    margin: 0px 0px 8px 0px;
    display: flex;
    /* border: 1px solid purple; */
`

const InfoBold = styled.p`
    margin: 0px 0px 0px 0px;
    width: 80px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #000000;
    /* border: 1px dashed gray; */
`

const InfoRegular = styled.p`
    margin: 0px 0px 0px 0px;
    /* width: 150px; */
    font-family: "aktiv-grotesk";
    font-style: italic;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #000000;
    /* border: 1px dashed red; */
`

const InfoDescription = styled.p`
    margin: 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #000000;
    /* border: 1px dotted black; */
`

function ComopnentDocTemplate(props) {
    let location = useLocation()

    function copyToClipboard() {
        let pathName = location.pathname
        let dummyElement = document.createElement("input")
        let tempHostName = "http://localhost:3000"
        let text = `${tempHostName}${pathName}`

        document.body.appendChild(dummyElement)
        dummyElement.value = text
        dummyElement.select()
        document.execCommand("copy")
        document.body.removeChild(dummyElement)
        // let confirmCopy = document.getElementById('confirmCopy')
        // confirmCopy.style.display = 'flex'
    }

    const { componentName, componentDescription, exampleText, templateProps } = props.templateInfo

    let newArr = templateProps.map((availableProp, idx) => {
        const { propName, propType, propDescription, options } = availableProp
        let optionListString = options.map(option => {
            return `${option}, `
        })

        return (
            <PropsInfoContainer key={idx}>
                <InfoWrapper>
                    <InfoBold>prop:</InfoBold>
                    <InfoRegular>{propName}</InfoRegular>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoBold>type:</InfoBold>
                    <InfoRegular>{propType}</InfoRegular>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoBold>options:</InfoBold>
                    <InfoRegular>{optionListString}</InfoRegular>
                </InfoWrapper>
                <InfoDescription>{propDescription}</InfoDescription>
            </PropsInfoContainer>
        )
    })

    return (
        <DocTemplateContainer>
            <TemplateHeaderContainer>
                <TemplateTitle>{componentName}</TemplateTitle>
                <CopyLinkContainer onClick={copyToClipboard}>
                    <img src={copyLink} alt={"Click to copy URL for this component."} />
                </CopyLinkContainer>
            </TemplateHeaderContainer>
            <TemplateDescriptionContainer>
                <TemplateDescriptionText>{componentDescription}</TemplateDescriptionText>
            </TemplateDescriptionContainer>
            <TemplateExampleContainer>
                <TemplateExampleText>{exampleText}</TemplateExampleText>
            </TemplateExampleContainer>
            <TemplatePropsContainer>
                <PropsHeaderText>Props</PropsHeaderText>
            </TemplatePropsContainer>
            {newArr}
            {/* {newField} */}
            <LiveDemo codeDisplay={props.templateInfo} />
        </DocTemplateContainer>
    )
}

export default ComopnentDocTemplate
