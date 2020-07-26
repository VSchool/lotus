import React from "react"
import styled from "styled-components"
import { Switch, Route } from 'react-router-dom'

import Introduction from './Introduction'
import Controls from '../example-components/Controls.example'
import Card from '../example-components/Card.example'
import FooterExample from '../example-components/Footer.example'
import HeaderExample from '../example-components/Header.example'
import ModalExample from '../example-components/Modal.example'
import ProfileExample from '../example-components/Profile.example'
import StatusChipExample from '../example-components/StatusChip.example'
import StatusMessageExample from '../example-components/StatusMessage.example'
import TaskbarExample from '../example-components/Taskbar.example'
import TitlebarItemExample from '../example-components/TitleBarItem.example'
import TitlebarExample from '../example-components/Titlebar.example'


const MainContainer = styled.div`
    width: 100%;
    padding: 32px 40px 24px 40px;
    overflow: scroll;
    /* background: #f6e8f9; */
`

export default function Main() {

    return (
        <MainContainer>
            <Switch>
                <Route exact path='/'><Introduction /></Route>
                <Route path='/controls'><Controls /></Route>
                <Route path='/card'><Card /></Route>
                <Route path='/footer'><FooterExample /></Route>
                <Route path='/header'><HeaderExample /></Route>
                <Route path='/modal'><ModalExample /></Route>
                <Route path='/profile'><ProfileExample /></Route>
                <Route path='/statusChip'><StatusChipExample /></Route>
                <Route path='/statusMessage'><StatusMessageExample /></Route>
                <Route path='/taskbar'><TaskbarExample /></Route>
                <Route path='/titlebarItem'><TitlebarItemExample /></Route>
                <Route path='/titlebar'><TitlebarExample /></Route>
            </Switch>
        </MainContainer>
    )
}
