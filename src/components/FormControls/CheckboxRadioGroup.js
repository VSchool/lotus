import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { ReactComponent as InfoIcon } from "../../assets/icons/circle_info.svg"
import { black, red } from "../../colors"
import "../../lotus.scss"

const Container = styled.div`
    display: flex;
    flex-direction: column;

    /* When props.columns is 2 and the screen > 800px,
    have the options wrap onto the next line. Otherwise
    they line up single-file */
    & .box-group {
        display: flex;
        flex-direction: column;
        ${(props) =>
            props.columns === 2 &&
            css`
                @media (min-width: 800px) {
                    flex-direction: row;
                    flex-wrap: wrap;
                }
            `}
        & > div {
            flex-basis: 100%;
            ${(props) =>
                props.columns === 2 &&
                css`
                    @media (min-width: 800px) {
                        flex-basis: 50%;
                    }
                `}
        }
    }
`

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
    console.log(props.columns)
    const errorMessage = props.validationText || "This field is required."
    return (
        <Container columns={props.columns}>
            <Label required={props.required}>{props.label}</Label>
            {props.hasError && (
                <ErrorMessage>
                    <InfoIcon className="info-icon" />
                    {errorMessage}
                </ErrorMessage>
            )}
            <div className="box-group">{props.children}</div>
        </Container>
    )
}

CheckboxRadioGroup.propTypes = {
    validationText: PropTypes.string,
    hasError: PropTypes.bool,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    columns: PropTypes.oneOf([1, 2]),
}

export default CheckboxRadioGroup
