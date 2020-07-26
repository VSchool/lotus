import React from 'react'
import styled from 'styled-components'
import { Button } from '@vschool/lotus'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const LiveContainer = styled.div`
    /* border: 1px solid lightcoral; */
    background: #FBF9F7;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    background: white;
    padding: 16px 0px 0px 0px;
    /* border: 1px solid blue; */
`

const scope = {Button, Container}

const code = `
    <Container>
        <Button buttonStyle={'primary-dark'} buttonSize={'xl'}>Button</Button>
    </Container>
`

function Live() {
    return (
        <LiveContainer>
            <LiveProvider scope={scope} code={code}>
                <LiveEditor />
                <LiveError />
                <LivePreview />
            </LiveProvider>
        </LiveContainer>
    )
}

export default Live