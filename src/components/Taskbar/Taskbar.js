import React from 'react'
import styled from 'styled-components'

import { gray, black } from '../../colors/gray'
import { green } from '../../colors/green'


const TaskbarContainer = styled.div`
    position: relative;
    max-width: 414px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${black};
    border: 4px solid ${green.lighter};
    box-sizing: border-box;

    @media (min-width: 768px) {
        max-width: 1200px;
    }
`

const TitleText = styled.p`
    margin: 0px 18px 0px 18px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${gray.base};

    @media (min-width: 768px) {
        max-width: 300px;
        margin: 0px 18px 0px 88px;

    }
`

const TaskText = styled.p`
    margin: 3px 18px 0px 18px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: ${gray.lighter};

    @media (min-width: 768px) {
        max-width: 300px;
        margin: 0px 18px 0px 88px;

    }
`

function Taskbar({title, task}) {
    return(
        <TaskbarContainer>
            <TitleText>{title}</TitleText>
            <TaskText>{task}</TaskText>
        </TaskbarContainer>
    )
}

export default Taskbar