import React from "react"
import styled from "styled-components"
import { TitlebarItem } from "../TitlebarItem"

const TitlebarContainer = styled.div`
    position: relative;
    min-width: 416px;
    height: 48px;
    display: flex;

    @media (min-width: 768px) {
        max-width: 100%;
    }
`

function Titlebar(props) {
    let blockOneProps = props.blockOneState
    let blockTwoProps = props.blockTwoState
    let blockThreeProps = props.blockThreeState
    return (
        <TitlebarContainer>
            <TitlebarItem titlebarItemState={blockOneProps.state} lineOneText={blockOneProps.firstLineMessage} lineTwoText={blockOneProps.secondLineMessage} />
            <TitlebarItem titlebarItemState={blockTwoProps.state} lineOneText={blockTwoProps.firstLineMessage} lineTwoText={blockTwoProps.secondLineMessage} />
            <TitlebarItem titlebarItemState={blockThreeProps.state} lineOneText={blockThreeProps.firstLineMessage} lineTwoText={blockThreeProps.secondLineMessage} />
        </TitlebarContainer>
    )
}

export default Titlebar
