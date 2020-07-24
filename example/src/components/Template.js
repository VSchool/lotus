import React from 'react'
import styled from 'styled-components'
import { Modal } from '@vschool/lotus'

const TemplateContainer = styled.div`
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 40px 0px;
    /* border: 1px solid lightcoral; */
`

const PropName = styled.p`
    margin: 0px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    /* border: 1px dotted red; */
`

const PropType = styled.p`
    margin: 8px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
    /* border: 1px dotted green; */
`

const PropDescription = styled.p`
    margin: 8px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #000000;
    /* border: 1px dotted blue; */
`

const CodeExampleContainer = styled.div`
    margin: 24px 0px 24px 0px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    background: rgba(196, 196, 196, 0.25);
`

const CodeExampleText = styled.p`
    margin: 0px;
    padding: 8px 16px 8px 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #000000;
    /* border: 1px dotted gray; */
`

function Template() {
    const titleText = 'Are you planning on applying for any V School Scholarships?'
    const subtitleText = 'Complete the scholarship application'
    const bodyText = 'If you are interested in applying for scholarships, maker sure to apply. THen we tell them how many people are usually rewarded with something.'

    return (
        <TemplateContainer>
            <PropName>title</PropName>
            <PropType>type: String</PropType>
            <PropDescription>Personalized description for what this particular prop does for the compnent that we are trying to make use of here.</PropDescription>
            <CodeExampleContainer>
                <CodeExampleText>{'<Modal title={string} />'}</CodeExampleText>
            </CodeExampleContainer>
            <Modal title={titleText} subtitle={subtitleText} body={bodyText} />

        </TemplateContainer>
    )
}

export default Template