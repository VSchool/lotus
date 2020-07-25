import React from 'react'
import styled from 'styled-components'

import linkIcon from '../assets/images/link.svg'

import { returnComponentObj } from './Template.utils'
import { Controls } from '@vschool/lotus'

const TemplateContainer = styled.div`
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    /* border: 1px solid lightcoral; */
`

const ComponentHeaderContainer = styled.div`
    display: flex;
    /* border: 1px solid dodgerblue; */
`

const ComponentNameHeaderText = styled.p`
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    color: #000000;
    /* border: 1px dotted gray; */
`

const CopyLinkContainer = styled.div`
    margin: 0px 0px 0px 16px;
    width: 24px;
    height: 24px;
    /* border: 1px solid green; */
`

const ComponentDescription = styled.p`
    margin: 24px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    /* border: 1px solid orange; */
`

const SubHeader = styled.p`
    margin: 40px 0px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid purple;
`

const PropText = styled.p`
    margin: 0px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #000000;
`

const Bubble = styled.div`
    border: 1px solid blue;
`

const TypeText = styled.p`
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #000000;
`

function Template(props) {
    const { component } = props
    let compName = component.componentName
    // console.log(component)


    let propNames = component.props.map((availableProp, idx) => {
        let dynamicProp = availableProp.propName
        // console.log(availableProp)

        return (
            <Bubble key={idx}>
                <PropText>{availableProp.propName}</PropText>
                <TypeText>{availableProp.propType}</TypeText>
                <Controls dynamicProp={true} />
            </Bubble>
        )
    })
    // console.log(propNames)
    return (
        <TemplateContainer>
            <ComponentHeaderContainer>
                <ComponentNameHeaderText>{component.componentName}</ComponentNameHeaderText>
                <CopyLinkContainer>
                    <img src={linkIcon} alt='Click to copy URL' />
                </CopyLinkContainer>
            </ComponentHeaderContainer>
            <ComponentDescription>{component.componentDescription}</ComponentDescription>
            <SubHeader>Props</SubHeader>
            {propNames}
        </TemplateContainer>
    )
}

export default Template