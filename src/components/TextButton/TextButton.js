import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { blue } from "../../colors"

const Button = styled.button`
    color: ${blue.base};
    box-sizing: border-box;
    padding: 0;
    padding-bottom: 3px;
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
    border: none;
    background-color: transparent;
    outline: none;
    position: relative;
    cursor: pointer;

    &:disabled {
        opacity: 0.67;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        &:after {
            content: "";
            width: 100%;
            height: 1px;
            background-color: ${blue.base};
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }

    &:active:not(:disabled) {
        color: ${blue.dark};
        &:after {
            background-color: ${blue.dark};
        }
    }

    @media (min-width: 800px) {
        font-size: 14px;
    }
`

function TextButton({ children, ...rest }) {
    return <Button {...rest}>{children}</Button>
}

TextButton.propTypes = {
    disabled: PropTypes.bool,
}

export default TextButton
