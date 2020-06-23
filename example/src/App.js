import React from "react"
import ButtonExample from "./example-components/Button.example"
import AccordionExample from "./example-components/Accordion.example"
import StatusChip from "./example-components/StatusChip.example"
import StatusMessageExample from './example-components/StatusMessage.example'
import CardExample from './example-components/Card.example'
import ModalExample from './example-components/Modal.example'
import FooterExample from './example-components/Footer.example'
import "./index.css"

function App() {
    return (
        <div>
            <ButtonExample />
            <AccordionExample />
            <StatusChip />
            <CardExample />
            <StatusMessageExample />
            <ModalExample />
            <FooterExample />
        </div>
    )
}

export default App
