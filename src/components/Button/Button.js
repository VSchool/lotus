import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { determineButtonColors } from "./utils"

const StyledButton = styled.button`
    /* Generic Styles */
    border-width: 2px;
    border-style: solid;
    border-width: 2px;
    padding: 10px;
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 18px;
    text-align: center;
    margin: 10px auto;
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;

    /* Color styles (including inverse) */
    ${props => {
        const { color, backgroundColor, borderColor } = determineButtonColors(props)
        return css`
            color: ${color};
            background-color: ${backgroundColor};
            border-color: ${borderColor};
        `
    }}

    /* Uppercase */
    text-transform: ${props => props.uppercase && "uppercase"};

    :hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 0 rgba(100, 100, 100, 0.5);
    }

    :active {
        transform: translate(4px, 4px);
        box-shadow: inset 1px 1px #eee9;
        border-top: 1px solid #eee9;
        border-left: 1px solid #eee9;
    }
`

StyledButton.propTypes = {
    color: PropTypes.oneOf(["gray", "black", "blue", "purple", "green", "yellow", "orange"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    uppercase: PropTypes.bool,
    inverse: PropTypes.bool
}

StyledButton.defaultProps = {
    color: "gray",
    size: "md",
    uppercase: false,
    inverse: false
}

export default StyledButton
