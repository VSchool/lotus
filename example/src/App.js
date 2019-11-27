import React, { Component } from "react"

import { Button, Accordion, AccordionGroup } from "@vschool/lotus"

export default class App extends Component {
    render() {
        return (
            <div>
                <Button>Hello world!!!</Button>
                <AccordionGroup>
                    <Accordion title="Test Title #1">
                        <p>
                            Here is the answer to the question. It's really
                            important you know this information
                        </p>
                    </Accordion>
                    <Accordion title="Test Title #2">
                        <p>
                            Here is the answer to the question. It's really
                            important you know this information
                        </p>
                    </Accordion>
                </AccordionGroup>
            </div>
        )
    }
}
