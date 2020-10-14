import React, { useState } from "react"
import ReactDOM from "react-dom"
// import styled from "styled-components"
// import { Titlebar, TitlebarItem } from "@vschool/lotus"
import { TextInput } from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"
import "./styles.css"

function InputExample() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                onChange={handleChange}
                label="Name"
                type="text"
                value={formData.name}
                // minLength={7}
                // required={false}
                name="name"
                // validationText="Required, must contain at least 7 characters"
            />
            <br />
            <br />
            <TextInput
                onChange={handleChange}
                label="Email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                minLength={5}
                required={false}
                name="email"
                validationText="Must contain at least 5 characters."
            />
            <br />
            <br />
            <TextInput
                onChange={handleChange}
                label="Password"
                type="password"
                value={formData.password}
                minLength={5}
                required={true}
                name="password"
                // hasError={true}
                validationText="Required, must contain at least 5 characters"
            />
        </form>
    )
}

ReactDOM.render(<InputExample />, document.getElementById("root"))
