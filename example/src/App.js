import React from "react"
import styled from "styled-components"
import SideNav from "./components/SideNav"
import Main from "./components/Main"

import "./index.css"

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    border: 1px solid black;
    display: flex;
`

function App() {
    return (
        <AppContainer>
            <SideNav />
            <Main />
        </AppContainer>
    )
}

export default App
