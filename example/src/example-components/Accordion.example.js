import React from "react"
import { AccordionGroup, Accordion } from "@vschool/lotus"

export default () => (
    <div>
        <h1>Accordion Element</h1>
        <AccordionGroup>
            <Accordion title="Test Title #1">
                <p>
                    Here is the answer to the question. It's really important you know this
                    information
                </p>
            </Accordion>
            <Accordion title="Test Title #2">
                <p>
                    Here is the answer to the question. It's really important you know this
                    information
                </p>
            </Accordion>
        </AccordionGroup>
    </div>
)
