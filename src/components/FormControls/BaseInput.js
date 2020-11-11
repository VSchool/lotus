import React, { forwardRef, useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { useId } from "react-id-generator"
import { gray, black, blue, red, green } from "../../colors"
import { ReactComponent as CheckmarkIcon } from "../../assets/icons/circle_check.svg"
import { ReactComponent as InfoIcon } from "../../assets/icons/circle_info.svg"

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 32px;
`

const Label = styled.label`
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

const ValidationText = styled.div`
    opacity: 0;
    display: flex;
    align-items: flex-start;
    font-size: 12px;
    color: ${gray.darker};
    margin-top: 4px;
    position: relative;
    transition: all 0.2s ease-in-out;

    & > * {
        transition: all 0.2s ease-in-out;
    }

    & svg {
        opacity: 0;
        position: absolute;
        left: 0;
        top: 2px;
        transform: translateX(-5px);

        & > path {
            fill: ${gray.darker};
        }
    }
`

const sharedInputStyles = css`
    /* Determine border color */
    ${(props) => {
        if (props.hasError || props._requiredAndEmpty) {
            return css`
                /* These styles copied from the :invalid section below
                This gives the dev a chance to override the built-in HTML
                validation by providing the hasError boolean in the input */
                border: 2px solid ${red.light};
                background-color: ${red.lightest};
                & + ${ValidationText} {
                    opacity: 1;
                    & > svg.info-icon {
                        opacity: 1;
                        transform: translateX(0);
                        margin-right: 2px;

                        & > path {
                            fill: ${red.base};
                        }
                    }
                    & > span {
                        transform: translateX(14px);
                        width: calc(100% - 14px);
                        color: ${red.base};
                    }
                }
            `
        } else if (!props.value || props.value.length === 0) {
            return css`
                border: 2px solid ${gray.base};
            `
        } else {
            return css`
                border: 2px solid ${gray.darker};
            `
        }
    }}
    border-radius: 0;
    height: 48px;
    outline: none;
    caret-color: ${gray.darker};
    color: ${black};
    padding-left: 16px;
    font-size: 16px;
    transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;

    &::placeholder {
        color: ${gray.dark};
    }

    &:hover {
        ${(props) =>
            !props._requiredAndEmpty &&
            css`
                border: 2px solid ${blue.light};
            `}
    }

    &:focus {
        ${(props) =>
            !props._requiredAndEmpty &&
            css`
                border: 2px solid ${blue.dark};
            `}
    }

    ${(props) =>
        props.value?.length > 0 &&
        props.hasRequirements &&
        css`
            &:valid {
                & + ${ValidationText} {
                    & > svg.checkmark-icon {
                        opacity: 1;
                        transform: translateX(0);
                        margin-right: 2px;
                    }
                    & > span {
                        transform: translateX(14px);
                        width: calc(100% - 14px);
                    }
                }
            }
            &:focus:valid {
                border: 2px solid ${green.base};
                & + ${ValidationText} {
                    opacity: 1;
                    & > span {
                        color: ${green.base};
                    }
                    & > svg.checkmark-icon > path {
                        fill: ${green.base};
                    }
                }
            }
            &:invalid {
                border: 2px solid ${red.base};
                & + ${ValidationText} {
                    & > svg.info-icon {
                        opacity: 1;
                        transform: translateX(0);
                        margin-right: 2px;

                        & > path {
                            fill: ${red.base};
                        }
                    }
                    & > span {
                        transform: translateX(14px);
                        width: calc(100% - 14px);
                        color: ${red.base};
                    }
                }
            }
            &:not(:focus):valid {
                & + ${ValidationText} {
                    opacity: 0;
                }
            }
            &:not(:focus):invalid {
                background-color: ${red.lightest};
            }
        `}
`

const Input = styled.input`
    ${sharedInputStyles};
`

const StyledTextarea = styled.textarea`
    ${sharedInputStyles};
    height: 200px;
    overflow-y: scroll;
    padding: 16px;
`

const TextInput = forwardRef((props, ref) => {
    const [id] = useId(1, "input-")
    const [_requiredAndEmpty, _setRequiredAndEmpty] = useState(false)

    const { minLength, maxLength, min, max, pattern, required } = props
    const hasAdditionalValidations = !!(minLength || maxLength || min || max || pattern)
    const hasRequirements = required || hasAdditionalValidations

    let defaultValidationText
    if (props.validationText === "auto-generate") {
        defaultValidationText = ""
        if (required) {
            defaultValidationText += "Required. "
        }
        if (props.type === "email") {
            defaultValidationText += "Must be a valid email address. "
        }
        if (minLength) {
            defaultValidationText += `Must be at least ${minLength} characters. `
        }
        if (maxLength) {
            defaultValidationText += `Must be at most ${maxLength} characters. `
        }
        if (min) {
            defaultValidationText += `Must be greater than ${min - 1}. `
        }
        if (max) {
            defaultValidationText += `Must be less than ${max + 1}. `
        }
    } else if (props.validationText?.length > 0) {
        defaultValidationText = props.validationText
    } else {
        defaultValidationText = ""
    }

    function defaultHandleChange(e) {
        if (required && e.target.value?.length > 0) {
            _setRequiredAndEmpty(false)
        }
        props.onChange && props.onChange(e)
    }

    function defaultHandleBlur(e) {
        _setRequiredAndEmpty(required && e.target.value?.length === 0)
        props.onBlur && props.onBlur(e)
    }

    return (
        <InputContainer>
            <Label htmlFor={id} required={required}>
                {props.label}
            </Label>
            {props.type === "textarea" ? (
                <StyledTextarea
                    {...props}
                    ref={ref}
                    id={id}
                    _requiredAndEmpty={_requiredAndEmpty}
                    onFocus={props.onFocus}
                    onBlur={defaultHandleBlur}
                    hasRequirements={hasRequirements}
                    onChange={defaultHandleChange}
                />
            ) : (
                <Input
                    {...props}
                    ref={ref}
                    id={id}
                    _requiredAndEmpty={_requiredAndEmpty}
                    onFocus={props.onFocus}
                    onBlur={defaultHandleBlur}
                    hasRequirements={hasRequirements}
                    onChange={defaultHandleChange}
                />
            )}
            <ValidationText>
                <CheckmarkIcon className="checkmark-icon" />
                <InfoIcon className="info-icon" />
                {hasRequirements && <span>{defaultValidationText}</span>}
            </ValidationText>
        </InputContainer>
    )
})

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "textarea", "password", "number", "tel", "email", "url"])
        .isRequired,
    hasError: PropTypes.bool,
    /**
    You must pass a value into the field as a controlled component. Otherwise the styling effects will be thrown off.
     */
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    /**
    Should contain any information that might help the user fill out the field. E.g. if the field is required, should add `validationText` of "Required."
    This text will only display if there are HTML form validations added to the input. (E.g. `required`, `minLength`, `maxLength`, `min`, `max`, or `pattern`)

    If you use the value `"auto-generate"`, it will automatically populate the validation text based on the requirements added. (Except for `pattern` validation).
     */
    validationText: PropTypes.string,
    placeholder: PropTypes.string,
}

export default TextInput
