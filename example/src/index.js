import React, { useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import {
    blue,
    Button,
    Card,
    CardGroup,
    CheckboxRadioGroup,
    Checkbox,
    Radio,
    TextInput,
    Textarea,
    TextButton,
} from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"
import "./styles.css"

const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

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
    return (
        <Container>
            <TextInput
                type="text"
                label="Name"
                name="name"
                required
                validationText="auto-generate"
            />
            <TextInput
                type="email"
                label="Email"
                name="email"
                required
                validationText="auto-generate"
            />
            <Button>Start Application</Button>
        </Container>
    )
}

ReactDOM.render(<InputExample />, document.getElementById("root"))
