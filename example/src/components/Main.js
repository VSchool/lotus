import React from "react"
import styled from "styled-components"
import { Switch, Route } from 'react-router-dom'

import Introduction from './Introduction'
import Controls from '../example-components/Controls.example'
import Card from '../example-components/Card.example'



const MainContainer = styled.div`
    width: 100%;
    padding: 32px 40px 24px 40px;
    overflow: scroll;
    /* background: #f6e8f9; */
`

export default function Main() {

    return (
        <MainContainer>
            <p>Hello</p>
            <Switch>
                <Route exact path='/'><Introduction /></Route>
                <Route path='/controls'><Controls /></Route>
                <Route path='/card'><Card /></Route>
            </Switch>
        </MainContainer>
    )
}
