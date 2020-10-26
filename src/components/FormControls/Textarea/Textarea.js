import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import BaseInput from "../BaseInput"
import "../../../lotus.scss"

function Textarea(props) {
    return <BaseInput {...props} type="textarea" />
}

Textarea.propTypes = {}

export default Textarea
