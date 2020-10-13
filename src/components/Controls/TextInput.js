import React, { forwardRef, useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { useId } from "react-id-generator"
import { gray, black, blue, white, red, green } from "../../colors"
import checkmark from "../../assets/icons/circle_check.png"
console.log(checkmark)
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
        if (props.hasError) {
            return css`
                border: 2px solid ${red.light};
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
    transition: border-color 0.2s ease-in-out;

    &::placeholder {
        color: ${gray.darker};
    }

    &:hover {
        border: 2px solid ${blue.light};
    }

    &:focus {
        border: 2px solid ${blue.dark};
    }

    &:focus:invalid {
        border: 2px solid ${red.base};

        & + span {
            color: ${red.base};
        }
    }

    ${(props) =>
        props.value?.length > 0 &&
        css`
            &:valid {
                & + span {
                    padding-left: 15px;
                    &::before {
                        content: "✔︎ ";
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            }
            &:focus:valid {
                border: 2px solid ${green.base};

                & + span {
                    color: ${green.base};
                    padding-left: 15px;
                    &::before {
                        content: "✔︎ ";
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            }
        `}
`

const ValidationText = styled.span`
    font-size: 12px;
    color: ${gray.dark};
    margin-top: 4px;
    position: relative;
    transition: all 0.2s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        opacity: 0;
        transform: translateX(-5px);
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    }
`

const TextInput = forwardRef((props, ref) => {
    const [id] = useId(1, "input-")
    const [hasBeenFocused, setHasBeenFocused] = useState(false)
    const [blurred, setBlurred] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [hasError, setHasError] = useState(props.hasError)

    const { minLength, maxLength, min, max, pattern, required } = props
    const hasAadditionalValidations = !!(minLength || maxLength || min || max || pattern)
    const requiredOnly = !!(props.required && !hasAadditionalValidations)

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
        setHasBeenFocused(true)
        props.onFocus?.(e)
    }

    function defaultHandleBlur(e) {
        setBlurred(true)
        // if (!e.target.value && requiredOnly) {
        //     setIsValid(false)
        // }
        if (!e.target.checkValidity()) {
            setHasError(true)
        }
        props.onBlur?.(e)
    }

    return (
        <InputContainer isValid={isValid}>
            <Label htmlFor={id} required={required}>
                {props.label}
            </Label>
            <Input
                {...props}
                ref={ref}
                id={id}
                onFocus={defaultHandleFocus}
                onBlur={defaultHandleBlur}
            />
            <ValidationText>{props.validationText}</ValidationText>
            <img src="" alt="check mark" />
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
    /**
    Should contain any information that might help the user fill out the field. E.g. if the field is required, should add `validationText` of "Required."
     */
    validationText: PropTypes.string,
    placeholder: PropTypes.string,
}

export default TextInput
