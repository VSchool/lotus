import React, { forwardRef, useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { useId } from "react-id-generator"
import { gray, black, blue, white, red, green } from "../../colors"
import { ReactComponent as CheckmarkIcon } from "../../assets/icons/circle_check.svg"
import { ReactComponent as InfoIcon } from "../../assets/icons/circle_info.svg"

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 318px;
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

const Input = styled.input`
    /* Determine border color */
    ${(props) => {
        if (props.hasError || props._requiredAndEmpty) {
            return css`
                /* These styles copied from the :invalid section below
                This gives the dev a chance to override the built-in HTML
                validation by providing the hasError boolean in the input */
                border: 2px solid ${red.light};
                background-color: ${red.lightest};
                & + div {
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
                        color: ${red.base};
                    }
                }
                /* &:hover,
                &:focus {
                    border: 2px solid ${red.base};
                } */

                /* &:focus {
                    border: 2px solid ${blue.dark};
                } */
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
        background-color: unset;
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
                & + div {
                    & > svg.checkmark-icon {
                        opacity: 1;
                        transform: translateX(0);
                        margin-right: 2px;
                    }
                    & > span {
                        transform: translateX(14px);
                    }
                }
            }
            &:focus:valid {
                border: 2px solid ${green.base};
                & + div {
                    & > span {
                        color: ${green.base};
                    }
                    & > svg.checkmark-icon > path {
                        fill: ${green.base};
                    }
                }
            }
            &:not(:focus):valid {
                & + div {
                    opacity: 0;
                }
            }
            &:invalid {
                border: 2px solid ${red.base};
                & + div {
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
                        color: ${red.base};
                    }
                }
            }
            &:not(:focus):invalid {
                background-color: ${red.lightest};
            }
            &:focus:invalid {
                background-color: unset;
            }
        `}
`

const ValidationText = styled.div`
    display: flex;
    align-items: center;
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
        transform: translateX(-5px);

        & > path {
            fill: ${gray.darker};
        }
    }
`

const TextInput = forwardRef((props, ref) => {
    const [id] = useId(1, "input-")
    const [hasBeenFocused, setHasBeenFocused] = useState(false)
    const [blurred, setBlurred] = useState(false)
    const [hasError, setHasError] = useState(props.hasError)
    const [_requiredAndEmpty, _setRequiredAndEmpty] = useState(false)

    const { minLength, maxLength, min, max, pattern, required } = props
    const hasAdditionalValidations = !!(minLength || maxLength || min || max || pattern)
    const hasRequirements = required || hasAdditionalValidations
    const requiredOnly = !!(props.required && !hasAdditionalValidations)
    /**
    If a field has additional validation requirements (minlength)
        turn red immediately upon focus while the validation isn't yet met
        turn green when the validation is met
        filled state upon blur
    if a field is ONLY required,
        normal state workflow
        upon blur the field is empty, then turn red and stay red, and has helper text saying it's required

     */

    function defaultHandleFocus(e) {
        // _setRequiredAndEmpty(false)
        setHasBeenFocused(true)
        props.onFocus && props.onFocus(e)
    }

    function defaultHandleChange(e) {
        if (required && e.target.value?.length > 0) {
            _setRequiredAndEmpty(false)
        }
        props.onChange && props.onChange(e)
    }

    function defaultHandleBlur(e) {
        setBlurred(true)
        _setRequiredAndEmpty(required && e.target.value?.length === 0)
        props.onBlur && props.onBlur(e)
    }

    return (
        <InputContainer>
            <Label htmlFor={id} required={required}>
                {props.label}
            </Label>
            <Input
                {...props}
                ref={ref}
                id={id}
                _requiredAndEmpty={_requiredAndEmpty}
                onFocus={defaultHandleFocus}
                onBlur={defaultHandleBlur}
                hasRequirements={hasRequirements}
                onChange={defaultHandleChange}
            />
            <ValidationText>
                <CheckmarkIcon className="checkmark-icon" />
                <InfoIcon className="info-icon" />
                {hasRequirements && <span>{props.validationText}</span>}
            </ValidationText>
        </InputContainer>
    )
})

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "password", "number", "tel", "email", "url"]).isRequired,
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
     */
    validationText: PropTypes.string,
    placeholder: PropTypes.string,
}

export default TextInput
