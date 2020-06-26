import React from "react"
import ButtonExample from "./example-components/Button.example"
import AccordionExample from "./example-components/Accordion.example"
import ControlsExample from './example-components/Controls.example'
import StatusChip from "./example-components/StatusChip.example"
import CardExample from './example-components/Card.example'
import StatusMessageExample from './example-components/StatusMessage.example'
import ModalExample from './example-components/Modal.example'
import FooterExample from './example-components/Footer.example'
import HeaderExample from './example-components/Header.example'
import ProfileExample from './example-components/Profile.example'
import TitlebarItemExample from './example-components/TitleBarItem.example'
import TitlebarExample from './example-components/Titlebar.example'
import "./index.css"

function App() {
    return (
        <div>
            <ButtonExample />
            <AccordionExample />
            <ControlsExample />
            <StatusChip />
            <CardExample />
            <StatusMessageExample />
            <ModalExample />
            <FooterExample />
            <HeaderExample />
            <ProfileExample />
            <TitlebarItemExample />
            <TitlebarExample />
        </div>
    )
}

export default App
