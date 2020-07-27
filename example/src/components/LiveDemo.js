import React from 'react'
import styled from 'styled-components'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

import { Controls, Card, Modal} from '@vschool/lotus'

const LiveDemoContainer = styled.div`
    /* background: lightgreen; */
`

const scope = {Controls, Card, Modal}

function createCode(name) {
    switch (name) {
        case 'Controls':
            return (
                `<Controls disabledStatus={false} />`
            )
        case 'Card':
            return (
                `<Card status={'up-next'} />`
            )
        case 'Modal':
            return (
                `<Modal title={'Hello'} subtitle={'World'} body={'body'} />`
            )
        default:
            return `There is no spoon.`
    }
}


function LiveDemo(props) {
    const { codeDisplay } = props
    // console.log(codeDisplay)
    let displayComponent = createCode(codeDisplay.componentName)
    console.log(displayComponent)

    

    return (
        <LiveDemoContainer>
        <LiveProvider scope={scope} code={displayComponent}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>
        </LiveDemoContainer>
    )
}

export default LiveDemo