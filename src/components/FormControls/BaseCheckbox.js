import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useId } from "react-id-generator"
import { gray, blue, white, green } from "../../colors"
import "../../lotus.scss"

export const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding-right: 24px;
    box-sizing: border-box;
    align-items: flex-start;

    &.checkbox {
        & > input:checked + label:before {
            border: 12px solid ${blue.base};
        }
    }

    &.radio {
        & > label:before {
            border-radius: 50%;
            border: 2px solid ${gray.base};
        }

        & > input:checked + label:before {
            border: 6px solid ${blue.base};
        }
    }

    &.switch {
        & > label {
            padding-left: 52px;
        }

        & > label:before {
            width: 40px;
            border-radius: 12px;
            background-color: ${gray.base};
        }

        & > label:after {
            content: "";
            position: absolute;
            left: 2px;
            top: 2px;
            height: 20px;
            width: 20px;
            background-color: ${white};
            border-radius: 50%;
            transition: all 0.2s ease-in-out;
        }

        & > input:checked + label:before {
            background-color: ${green.base};
            border-color: ${green.base};
        }

        & > input:checked + label:after {
            transform: translateX(16px);
        }
    }
`

export const ControlsInput = styled.input`
    appearance: none;
    opacity: 0;
    margin: 0;

    &:not(:checked) + label:before {
        border: 2px solid ${gray.base};
    }

    &:disabled + label {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

export const ControlsLabel = styled.label`
    min-height: 24px;
    position: relative;
    font-family: "aktiv-grotesk";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    padding-left: 36px;
    cursor: pointer;
    /* user-select: none; */

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        transition: all 0.1s ease-in-out;
        box-sizing: border-box;
        background-color: ${white};
    }
`
function BaseCheckbox({ className, style, children, ...rest }) {
    const [id] = useId(1, "controls-")
    return (
        <ControlsContainer className={className} style={style}>
            <ControlsInput id={id} {...rest} />
            <ControlsLabel htmlFor={id}>{children}</ControlsLabel>
        </ControlsContainer>
    )
}

BaseCheckbox.propTypes = {
    /**
    The value the option will be if it is checked
     */
    value: PropTypes.string.isRequired,
    /**
    Whether or not the controls should be filled in
     */
    checked: PropTypes.bool,
    /**
    Whether or not the controls and label should be disabled/grayed-out
     */
    disabled: PropTypes.bool,
    /**
    Handler function to run when the controls changes
     */
    onChange: PropTypes.func.isRequired,
    /**
    The `name` attribute which can be used for modifying state, specifically when state is an object with key/value pairs. (This `name` prop is usually used as the key for object state. If using hooks with a simple boolean state, `name` is not required.)
     */
    name: PropTypes.string,
    /**
    The text/elements to display on the associated label
     */
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
    className: PropTypes.string.isRequired,
}

export default BaseCheckbox
