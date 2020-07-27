import React from 'react'
import styled from 'styled-components'
import LiveDemo from './LiveDemo'

import copyLink from '../assets/images/link.svg'

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
    font-family: 'aktiv-grotesk';
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
    /* border: 1px dashed green; */
`

const TemplateDescriptionText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    /* border: 1px solid gray; */
`

const TemplateExampleContainer = styled.div`
    margin: 56px 0px 0px 0px;
    /* width: 800px; */
    /* height: 56px; */
    padding: 8px 16px 8px 16px;
    background: #F4F2F2;
    border-left: 4px solid #59AF9B;

    /* border: 1px solid gold; */
`

const TemplateExampleText = styled.p`
    margin: 0px;

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
    font-family: 'aktiv-grotesk';
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
    font-family: 'aktiv-grotesk';
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
    font-family: 'aktiv-grotesk';
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
    font-family: 'aktiv-grotesk';
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
    // console.log(props.templateInfo)

    const { componentName, componentDescription, exampleText, templateProps } = props.templateInfo

    let newArr = templateProps.map((availableProp, idx) => {
        const { propName, propType, propDescription, options } = availableProp
        let optionListString = options.map((option) => {
            // console.log(`Hello ${option}`)
            return `${option}, `
        })
        // console.log(optionListString)


        return (
            <PropsInfoContainer key={idx}>
                <InfoWrapper>
                    <InfoBold>prop:</InfoBold><InfoRegular>{propName}</InfoRegular>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoBold>type:</InfoBold><InfoRegular>{propType}</InfoRegular>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoBold>options:</InfoBold><InfoRegular>{optionListString}</InfoRegular>
                </InfoWrapper>
                <InfoDescription>{propDescription}</InfoDescription>
            </PropsInfoContainer>
        )
    })

    // console.log(templateProps)
    return (
        <DocTemplateContainer>
            <TemplateHeaderContainer>
                <TemplateTitle>{componentName}</TemplateTitle>
                <CopyLinkContainer><img src={copyLink} alt={'Click to copy URL for this component.'} /></CopyLinkContainer>
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
            <LiveDemo codeDisplay={props.templateInfo} />
            {/* <PropsInfoContainer>
                <InfoBold>prop:</InfoBold><InfoRegular>title</InfoRegular>
            </PropsInfoContainer> */}
        </DocTemplateContainer>
    )
}

export default ComopnentDocTemplate