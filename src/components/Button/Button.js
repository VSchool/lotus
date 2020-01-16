import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { determineButtonColors, determineButtonSize } from "./utils"
import * as colors from "../../colors"

const StyledButton = styled.button`
    /* Generic Styles */
    border-width: 2px;
    border-style: solid;
    border-width: 2px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 18px;
    text-align: center;
    margin: 0;
    padding: .75em 1.25em;
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    
    /* See if Logan wants the transition or not */
    transition: transform .05s ease-in-out ,box-shadow .05s ease-in-out;

    /* Color styles */
    ${props => {
        const { color, backgroundColor, borderColor } = determineButtonColors(props)
        return css`
            color: ${color};
            background-color: ${backgroundColor};
            border-color: ${borderColor};
        `
    }}

    /* Sizes */
    /* ${props => {
        const { height } = determineButtonSize(props)
        return css`
            height: ${height};
        `
    }} */

    /* Uppercase */
    text-transform: ${props => props.uppercase && "uppercase"};

    :hover:enabled {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.25);

        ${props =>
            props.buttonStyle.startsWith("secondary") &&
            css`
                background-color: transparent;
            `}
    }

    :active:enabled {
        transform: translate(4px, 4px);
        box-shadow: none;
    }

    :focus {
        outline: 1px solid ${colors.blue.base}
    }

    :disabled {
        cursor: not-allowed;
        opacity: 40%;
        box-shadow: none;
        ${props =>
            props.buttonStyle === "primary-dark" &&
            css`
                background-color: ${colors.black};
            `}
    }
`

StyledButton.propTypes = {
    buttonStyle: PropTypes.oneOf([
        "primary-dark",
        "primary-light",
        "secondary-dark",
        "secondary-light"
    ]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    uppercase: PropTypes.bool,
    inverse: PropTypes.bool
}

StyledButton.defaultProps = {
    buttonStyle: "primary-dark",
    size: "md",
    uppercase: false,
    inverse: false
}

export default StyledButton
