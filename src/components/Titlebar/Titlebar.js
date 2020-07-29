import React from "react"
import styled from "styled-components"
import { TitlebarItem } from "../TitlebarItem"

const TitlebarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    /* border: 1px solid dodgerblue; */
`

function Titlebar(props) {
    let blockOne = props.blockOne
    let blockTwo = props.blockTwo
    let blockThree = props.blockThree
    return (
        <TitlebarContainer>
            <TitlebarItem itemState={blockOne.blockState} firstLineMessage={blockOne.firstLine} secondLineMessage={blockOne.secondLine} />
            <TitlebarItem itemState={blockTwo.blockState} firstLineMessage={blockTwo.firstLine} secondLineMessage={blockTwo.secondLine} />
            <TitlebarItem itemState={blockThree.blockState} firstLineMessage={blockThree.firstLine} secondLineMessage={blockThree.secondLine} />
        </TitlebarContainer>
    )
}

export default Titlebar
