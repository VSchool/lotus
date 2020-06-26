import React from 'react'
import styled from 'styled-components'

import { blue } from '../../colors/blue'
import { gray } from '../../colors/gray'

const ControlsContainer = styled.div`
    position: relative;
    width: 240px;
    height: 24px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    /* border: 1px solid lightcoral; */
`   

const CheckboxLabel = styled.p`
    margin: 0px 0px 0px 12px;
    width: 100%;
    height: 24px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    box-sizing: border-box;
    /* border: 1px solid dodgerblue; */
`

const TermsLink = styled.a`
    margin: 0px 0px 0px 0px;
    color: ${blue.base};
    text-decoration: underline;
`

function Controls() {
    return (
        <ControlsContainer>
            <input type='checkbox' />
            <CheckboxLabel>I agree <TermsLink>Terms & Conditions</TermsLink></CheckboxLabel>
        </ControlsContainer>
    )
}

export default Controls