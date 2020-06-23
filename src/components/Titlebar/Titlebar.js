import React from 'react'
import styled from 'styled-components'

import circleCheck from '../../assets/icons/circleCheck.svg'

const ItemContainer = styled.div`
    position: relative;
    max-width: 138px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding: 0px 8px 0px 18px;
    background: #21201F;
    border: 1px solid black;
    box-sizing: border-box;

`

const ItemTitle = styled.p`
    margin: 0px 0px 0px 0px;
    width: 100%;
    height: 12px;
    font-family: 'aktiv-grotesk-extended';
    /* font-family: Aktiv Grotesk Ex; */
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #D8D4CF;
    opacity: 0.8;
    box-sizing: border-box;

    /* border: 1px dotted green; */
`

const StepWrapper = styled.div`
    width: 100%;
    margin: 2px 0px 0px 0px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    /* border: 1px solid red; */
`

const CheckmarkContainer = styled.div`
    width: 16px;
    height: 16px;
    background: url(${circleCheck});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    /* border: 1px dotted blue; */
`

const ItemText = styled.p`
    margin: 0px 0px 0px 4px;
    font-family: 'aktiv-grotesk-extended';
    /* font-family: Aktiv Grotesk Ex; */
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: #FBF9F7;
    opacity: 0.8;
    /* border: 1px dotted blue; */
`

function Titlebar() {
    return (
        <ItemContainer>
            <ItemTitle>Step 1</ItemTitle>
            <StepWrapper>
                <CheckmarkContainer></CheckmarkContainer>
                <ItemText>Apply</ItemText>
            </StepWrapper>
        </ItemContainer>
    )
}

export default Titlebar