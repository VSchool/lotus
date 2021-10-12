import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
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

function InputExample() {

    return (
        <Container>
            <h1>Example page</h1>
        </Container>
    )
}

ReactDOM.render(<InputExample />, document.getElementById("root"))
