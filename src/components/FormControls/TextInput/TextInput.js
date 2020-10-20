import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import BaseInput from "../BaseInput"
import "../../../lotus.scss"

function TextInput(props) {
    return <BaseInput {...props} />
}

TextInput.propTypes = {}

export default TextInput
