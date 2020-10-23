import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { ReactComponent as InfoIcon } from "../../assets/icons/circle_info.svg"
import { black, red } from "../../colors"
import "../../lotus.scss"

const Container = styled.div``

const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    color: ${red.base};
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;

    & > svg.info-icon {
        margin-right: 2px;

        & > path {
            fill: ${red.base};
        }
    }
`

const Label = styled.label`
    display: block;
    font-family: "aktiv-grotesk-extended";
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    margin-bottom: 8px;

    ${(props) =>
        props.required &&
        css`
            &::before {
                content: "* ";
                color: ${red.base};
            }
        `}
`
function CheckboxRadioGroup(props) {
    const errorMessage = props.validationText || "This field is required."
    return (
        <Container>
            <Label required={props.required}>{props.label}</Label>
            {props.hasError && (
                <ErrorMessage>
                    <InfoIcon className="info-icon" />
                    {errorMessage}
                </ErrorMessage>
            )}
            {props.children}
        </Container>
    )
}

CheckboxRadioGroup.propTypes = {
    validationText: PropTypes.string,
    hasError: PropTypes.bool,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
}

export default CheckboxRadioGroup
