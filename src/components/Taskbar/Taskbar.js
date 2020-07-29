import React from "react"
import styled from "styled-components"
import * as colors from "../../colors"

const TaskbarContainer = styled.div`
    position: relative;
    min-width: 414px;
    height: 48px;
    background: #21201F;
    border: 4px solid #99CEC1;
    box-sizing: border-box;

    @media (min-width: 768px) {
        background: lightcoral;
        max-width: 100%;
    }
`

const TextLineOne = styled.p`
    margin: 0px;
    color: white;
    border: 1px dotted lightblue;
`

const TextLineTwo = styled.p`
    margin: 0px;
    color: white;
    border: 1px dotted lightblue;
`


function Taskbar(props) {
    // console.log(props)
    return (
        <TaskbarContainer>
            <TextLineOne>Line One</TextLineOne>
            <TextLineTwo>Line Two</TextLineTwo>
        </TaskbarContainer>
    )
}

export default Taskbar
