import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { gray } from "../../colors"
import "../../lotus.scss"

const TitlebarContainer = styled.div`
    width: 100%;
    height: 48px;
    display: grid;
    grid-template-rows: 48px;
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
    grid-gap: 1px;
    background-color: ${gray.dark};
    margin: 0;
    box-sizing: border-box;
`

function Titlebar({ children, activeIndex, stepName }) {
    // Cloning each of the children allows us to pass props in,
    // such as which index it is in the array of all children and what the current activeIndex is
    const childrenWithProps = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { index, activeIndex, stepName })
    })
    return <TitlebarContainer>{childrenWithProps}</TitlebarContainer>
}

Titlebar.propTypes = {
    /**
    0-indexed and indicates which "step" in the progress the user currently is on. `TitlebarItems` listed before the `activeIndex` are considered complete, and those after the `activeIndex` are disabled.
     */
    activeIndex: PropTypes.number,
    /**
    If you don't want to use "Step" as the indicator, you can specify an alternative.
     */
    stepName: PropTypes.string,
}

Titlebar.defaultProps = {
    stepName: "Step",
}

export default Titlebar
