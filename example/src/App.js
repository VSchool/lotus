import React from "react"
import styled from 'styled-components'
import SideNav from './components/SideNav'
import Main from './components/Main'

// import ButtonExample from "./example-components/Button.example"
// import AccordionExample from "./example-components/Accordion.example"
// import ControlsExample from './example-components/Controls.example'
// import StatusChip from "./example-components/StatusChip.example"
// import CardExample from './example-components/Card.example'
// import StatusMessageExample from './example-components/StatusMessage.example'
// import ModalExample from './example-components/Modal.example'
// import FooterExample from './example-components/Footer.example'
// import HeaderExample from './example-components/Header.example'
// import ProfileExample from './example-components/Profile.example'
// import TaskbarExample from './example-components/Taskbar.example'
// import TitlebarItemExample from './example-components/TitleBarItem.example'
// import TitlebarExample from './example-components/Titlebar.example'
import "./index.css"

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    border: 1px solid black;
    display: flex;
`

function App() {

    // const [appState, setAppState] = useState({displayComponent: 'none'})

    // console.log(appState)

    return (
        <AppContainer>
                <SideNav />
                <Main />
            {/* <ButtonExample />
            <AccordionExample />
            <ControlsExample />
            <StatusChip />
            <CardExample />
            <StatusMessageExample />
            <ModalExample />
            <FooterExample />
            <HeaderExample />
            <ProfileExample />
            <TaskbarExample />
            <TitlebarItemExample />
            <TitlebarExample /> */}
        </AppContainer>
    )
}

export default App
