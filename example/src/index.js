import React, { useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { Card, CardGroup, Checkbox, Radio, TextInput, Textarea, blue } from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"
import "./styles.css"

const StyledCard = styled(Card)`
    width: 412px;
`

const Container = styled.section`
    padding: 25px;
    display: flex;
    flex-direction: column;
    background-color: ${blue.lightest};
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

const Button = styled.p`
    font-size: 14px;
    line-height: 18px;
    color: blue;
    letter-spacing: 0.25px;
`

function InputExample() {
    return (
        <Container>
            <TextInput label="Name" required />
            <Textarea label="Name" required />
        </Container>
    )
}

ReactDOM.render(<InputExample />, document.getElementById("root"))
