import React from "react"
import ReactDOM from "react-dom"
import { Banner } from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"

function App() {
    return (
        <>
            <Banner status="neutral">Message here</Banner>
            <br />
            <Banner status="success">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate dignissimos
                vero totam magni inventore explicabo iure laboriosam? Dicta vitae sequi repellat ex
                qui commodi corporis et excepturi ut expedita.
            </Banner>
            <br />
            <Banner status="warning">Message here</Banner>
            <br />
            <Banner status="error">Message here</Banner>
            <br />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
