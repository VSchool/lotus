import React, { useContext } from 'react'
import styled from 'styled-components'
import { ComponentDisplayContext } from '../providers/Store'
import { decideInfo } from './Main.utils'
import Table from './Table'

import CardExample from '../example-components/Card.example'
import ControlsExample from '../example-components/Controls.example'
import ModalExample from '../example-components/Modal.example'
import StatusMessageExample from '../example-components/StatusMessage.example'
import HeaderExample from '../example-components/Header.example'
import FooterExample from '../example-components/Footer.example'
import ProfileExample from '../example-components/Profile.example'
import StatusChipExample from '../example-components/StatusChip.example'
import TaskbarExample from '../example-components/Taskbar.example'
import TitlebarExample from '../example-components/TitlebarItem.example'

const MainContainer = styled.div`
    width: 100%;
    padding: 32px 40px 24px 40px;
    overflow: scroll;
    /* background: #f6e8f9; */
`

const WelcomeText = styled.p`
    margin: 0px 0px 16px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
`

const HeaderText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const LineBreak = styled.div`
    /* width: 80%; */
    margin: 16px 0px 24px 0px;
    height: 2px;
    background: #D1C8C8;
`

const IntroBody = styled.p`
    margin: 0px 0px 16px 0px;
    height: 100px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    opacity: .65;
    /* border: 1px dotted gray; */
`

const ComponentName = styled.p`
    margin: 0px 0px 16px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    /* border: 1px solid orange; */
`

const BodyText = styled.p`
    margin: 0px 0px 24px 0px;
    height: 50px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    opacity: .65;
    /* border: 1px solid green; */
`

export default function Main() {

    const [componentDisplay] = useContext(ComponentDisplayContext)
    let name = componentDisplay.componentDisplay
    let newObj = decideInfo(name)
    const { compName, description } = newObj

    function displayComponent(displayComponentName) {
        switch (displayComponentName) {
            case 'Header':
                return <HeaderExample />
            case 'Modal':
                return <ModalExample />
            case 'Status Message':
                return <StatusMessageExample />
            case 'Card':
                return <CardExample />
            case 'Controls':
                return <ControlsExample />
            case 'Footer':
                return <FooterExample />
            case 'Profile':
                return <ProfileExample />
            case 'StatusChip':
                return <StatusChipExample />
            case 'Taskbar':
                return <TaskbarExample />
            case 'TitlebarItem':
                return <TitlebarExample />
            default:
                return 'Default Case'
        }
    }
    let rando = displayComponent(name)

    return (
        <MainContainer>
            <WelcomeText>Welcome</WelcomeText>
            <HeaderText>Introduction</HeaderText>
            <LineBreak />
            <IntroBody>The following references will provide guidance on how V School components are used.</IntroBody>
            <ComponentName>{compName}</ComponentName>
            <BodyText>{description}</BodyText>
            <Table component={compName} />
            <LineBreak />
            {rando}
        </MainContainer>
    )
}