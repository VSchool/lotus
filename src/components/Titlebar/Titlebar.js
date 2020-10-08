import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import "../../lotus.scss"

const TitlebarContainer = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
`

function Titlebar(props) {
    return <TitlebarContainer>{children}</TitlebarContainer>
}

export default Titlebar
