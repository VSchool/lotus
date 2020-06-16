import React from "react"
import ButtonExample from "./example-components/Button.example"
import AccordionExample from "./example-components/Accordion.example"
import StatusChip from "./example-components/StatusChip.example"
import StatusMessageExample from './example-components/StatusMessage.example'

import "./index.css"

function App() {
    return (
        <div>
            <ButtonExample />
            <AccordionExample />
            <StatusChip />
            <StatusMessageExample />
        </div>
    )
}

export default App
