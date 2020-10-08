import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Titlebar, TitlebarItem } from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"
import "./styles.css"
function TitlebarExample() {
    return (
        <Titlebar activeIndex={1}>
            <TitlebarItem>Background</TitlebarItem>
            <TitlebarItem>Application</TitlebarItem>
            <TitlebarItem>Enrollment</TitlebarItem>
        </Titlebar>
    )
}

// function InputExample() {
//     const [name, setName] = useState("")

//     function handleChange(e) {
//         setName(e.target.value)
//     }

//     function handleSubmit(e) {
//         e.preventDefault()
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <TextInput
//                 onChange={handleChange}
//                 label="First Name"
//                 type="text"
//                 value={name}
//                 minLength={3}
//                 required={true}
//                 hasError={false}
//                 name="firstName"
//                 // helpText="Must be at least 3 characters"
//             />
//         </form>
//     )
// }

ReactDOM.render(<TitlebarExample />, document.getElementById("root"))
