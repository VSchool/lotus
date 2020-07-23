import React from "react"
import styled from 'styled-components'
import { Button } from "@vschool/lotus"

const ButtonExampleContainer = styled.div`
    margin: 0px;
    width: 100%;
    /* border: 1px solid lightcoral; */
`

const Examples = styled.p`
    margin: 0px 0px 24px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const Section = styled.div`
    margin: 16px 0px 0px 0px;
    /* border: 1px dotted green; */
`

const SectionName = styled.p`
    margin: 0px 0px 8px 0px;
    font-family: 'aktiv-grotesk';
    /* font-style: bold; */
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
`

const TypeSection = styled.div`
    padding: 0px 0px 16px 16px;
    /* border: 1px dotted blue; */
`

const TypeName = styled.p`
    margin: 16px 0px 8px 0px;
    font-family: 'aktiv-grotesk';
    /* font-style: bold; */
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
`

export default () => (
    <ButtonExampleContainer>
        <Examples>Examples</Examples>
        <Section>
            <SectionName>'buttonStyle' = 'primary-dark'</SectionName>
            <TypeSection>
                <TypeName>'buttonSize' = 'xl'</TypeName>
                <Button buttonStyle="primary-dark" buttonSize="xl">Button</Button>
                <TypeName>'buttonSize' = 'lg'</TypeName>
                <Button buttonStyle="primary-dark" buttonSize="lg">Button</Button>
                <TypeName>'buttonSize' = 'md'</TypeName>
                <Button buttonStyle="primary-dark" buttonSize="md">Button</Button>
                <TypeName>'buttonSize' = 'sm'</TypeName>
                <Button buttonStyle="primary-dark" buttonSize="sm">Button</Button>
            </TypeSection>
        </Section>
        <Section>
            <SectionName>'buttonStyle' = 'primary-light'</SectionName>
            <TypeSection>
                <TypeName>'buttonSize' = 'xl'</TypeName>
                <Button buttonStyle="primary-light" buttonSize="xl">Button</Button>
                <TypeName>'buttonSize' = 'lg'</TypeName>
                <Button buttonStyle="primary-light" buttonSize="lg">Button</Button>
                <TypeName>'buttonSize' = 'md'</TypeName>
                <Button buttonStyle="primary-light" buttonSize="md">Button</Button>
                <TypeName>'buttonSize' = 'sm'</TypeName>
                <Button buttonStyle="primary-light" buttonSize="sm">Button</Button>
            </TypeSection>
        </Section>
    </ButtonExampleContainer>
    
)


