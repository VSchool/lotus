import React, { useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { Card } from "@vschool/lotus"
import "@vschool/lotus/dist/index.css"
import "./styles.css"

function InputExample() {
    return (
        <>
            <Card></Card>
        </>
    )
}

ReactDOM.render(<InputExample />, document.getElementById("root"))
