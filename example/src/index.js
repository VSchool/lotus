import React from "react"
import ReactDOM from "react-dom/client"
import styled from "styled-components"
import "@vschool/lotus/dist/index.css"
import "./styles.css"
import { CheckboxRadioGroup, Checkbox } from "@vschool/lotus"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: papayawhip; */
    padding: 24px;
`

function InputExample() {
    return (
        <Container>
            {/* <h1>Example page</h1> */}
            <CheckboxRadioGroup label="Test label">
                <Checkbox onChange={() => {}} value="yes">
                    Checkbox Label here
                </Checkbox>
                <Checkbox onChange={() => {}} value="no">
                    Checkbox Label here
                </Checkbox>
            </CheckboxRadioGroup>
        </Container>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<InputExample />)
