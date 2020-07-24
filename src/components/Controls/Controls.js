import React from "react"
import styled from "styled-components"
import * as colors from '../../colors'

const ControlsContainer = styled.div`
    position: relative;
    width: 240px;
    height: 24px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`

const CheckboxLabel = styled.p`
    margin: 0px 0px 0px 12px;
    width: 100%;
    height: 24px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.gray.darker};
    box-sizing: border-box;
`

const TermsLink = styled.a`
    margin: 0px 0px 0px 0px;
    color: ${colors.blue.base};
    text-decoration: underline;
`

function Controls({ disabledStatus }) {
    return (
        <ControlsContainer>
            <input type="checkbox" disabled={disabledStatus} />
            <CheckboxLabel>
                I agree <TermsLink>Terms & Conditions</TermsLink>
            </CheckboxLabel>
        </ControlsContainer>
    )
}

export default Controls
