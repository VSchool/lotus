import React, { forwardRef, useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { useId } from "react-id-generator"
import { gray, black, blue, white, red } from "../../colors"

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

    /* &:invalid {
        border: 2px solid ${red.light};

        & + span {
            color: ${red.light};
        }
    } */
`

const HelpText = styled.span`
    font-size: 12px;
    color: ${gray.dark};
    margin-top: 4px;
`

const TextInput = forwardRef((props, ref) => {
    const [id] = useId(1, "input-")
    const [hasBeenFocused, setHasBeenFocused] = useState(false)
    const [touchedAndBlurred, setTouchedAndBlurred] = useState(false)

    function defaultHandleFocus(e) {
        setHasBeenFocused(true)
    }

    function defaultHandleBlur(e) {
        console.log("Blurred")
    }

    return (
        <InputContainer>
            <Label htmlFor={id}>
                {props.label}
                {props.required && " *"}
            </Label>
            <Input
                {...props}
                ref={ref}
                id={id}
                onFocus={props.onFocus || defaultHandleFocus}
                onBlur={props.onBlur || defaultHandleBlur}
            />
            <HelpText>
                {props.required && "* Required. "}
                {props.helpText}
            </HelpText>
        </InputContainer>
    )
})

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "password", "number", "tel", "email", "url"]).isRequired,
    hasError: PropTypes.bool,
    helpText: PropTypes.string,
}

export default TextInput
