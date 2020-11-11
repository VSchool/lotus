import React, { useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { Formik, Field, Form } from "formik"
import {
    blue,
    Button,
    CheckboxRadioGroup,
    Checkbox,
    Radio,
    TextInput,
    Textarea,
} from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"
import "./styles.css"

const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: papayawhip;
    padding: 24px;
    width: 1024px;
`

const Logo = styled.div`
    width: 64px;
    height: 64px;
    background-color: red;
    margin-bottom: 8px;
`

const Title = styled.h5`
    margin-bottom: 8px;
`

const Text = styled.p`
    margin-bottom: 16px;
`

const BoxGroup = styled(CheckboxRadioGroup)`
    margin-bottom: 100px;
`

function InputExample() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleNameChange(e) {
        const { value } = e.target
        setName(value)
    }

    function handleEmailChange(e) {
        const { value } = e.target
        setEmail(value)
    }

    return (
        <Container>
            <form>
                <TextInput
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    label="Name"
                    required
                    validationText="auto-generate"
                />
            </form>
        </Container>
    )
}

ReactDOM.render(<InputExample />, document.getElementById("root"))
