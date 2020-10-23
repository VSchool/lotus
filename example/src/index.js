import React, { useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
// import { Titlebar, TitlebarItem } from "@vschool/lotus"
import { TextInput, Textarea, Checkbox, Radio, CheckboxRadioGroup, Button } from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"
import "./styles.css"

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;

    & > div {
        flex-basis: 50%;
        min-width: 200px;
    }
`

function InputExample() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", whyJoin: "" })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    function handleSubmit(e) {
        // e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                onChange={handleChange}
                label="Name"
                type="text"
                value={formData.name}
                minLength={3}
                required={true}
                name="name"
                validationText="auto-generate"
            />
            <Textarea
                onChange={handleChange}
                label="Why do you want to join V School?"
                type="textarea"
                value={formData.whyJoin}
                minLength={3}
                required={true}
                name="whyJoin"
                validationText="auto-generate"
            />
            {/* <TextInput
                onChange={handleChange}
                label="Email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                minLength={5}
                required={true}
                name="email"
                validationText="auto-generate"
            />
            <TextInput
                onChange={handleChange}
                label="Password"
                type="password"
                value={formData.password}
                minLength={5}
                required={true}
                name="password"
                validationText="Required, must contain at least 5 characters"
            /> */}
            <CheckboxRadioGroup
                label="Choose an option"
                hasError={true}
                errorMessage="Hey there! You gotta do this..."
                required={true}
            >
                <Container>
                    <Checkbox>Hire our students 1</Checkbox>
                    <Checkbox>Hire our students 2</Checkbox>
                    <Checkbox>Hire our students 3</Checkbox>
                    <Radio>Hire our students 3</Radio>
                </Container>
            </CheckboxRadioGroup>
            <Button>Submit</Button>
        </form>
    )
}

ReactDOM.render(<InputExample />, document.getElementById("root"))
