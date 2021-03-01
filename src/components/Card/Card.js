import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { black, white, blue, gray, yellow, green, pink } from "../../colors"
import "../../lotus.scss"

const CardContainer = styled.div`
    padding: 24px;
    box-sizing: border-box;
    transition: filter 0.2s ease-in-out;
    background: ${gray.lighter};
    border: 2px solid ${gray.base};
    max-height: 400px;

    &:hover {
        filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2))
            drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.12))
            drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.14));
    }
`

function Card({ children, ...rest }) {
    return <CardContainer {...rest}>{children}</CardContainer>
}

export default Card
