import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
    background-color: ${props => props.backgroundColor};
    text-transform: ${props => props.uppercase && "uppercase"};
    border-width: 2px;
    padding: 10px;

    &:focus {
        outline: 0;
    }

    &:hover {
        cursor: pointer;
    }
`

function Button({ children, uppercase }) {
    return <StyledButton uppercase={uppercase}>{children}</StyledButton>
}

// Button.propTypes = {
//     backgroundColor: PropTypes.string,
//     size: PropTypes.oneOf(["sm", "m", "l", "xl"]),
//     uppercase: PropTypes.bool
// }

// Button.defaultProps = {
//     backgroundColor: gray.darker,
//     // size: ???,
//     uppercase: false
// }

export default Button
