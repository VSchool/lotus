import React, { useState } from "react"
import ReactDOM from "react-dom"
import { TextInput } from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"

function App() {
    const [name, setName] = useState("")

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                onChange={handleChange}
                label="First Name"
                type="text"
                value={name}
                minLength={3}
                required={true}
                hasError={false}
                name="firstName"
                // helpText="Must be at least 3 characters"
            />
        </form>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
