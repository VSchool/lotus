import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const HeaderTemplateObj = {
    componentName: "Header",
    componentDescription:
        "Give users an exit, a way back, and a way to know their logged in status.",
    exampleText: `<Header />`,
    templateProps: [
        {
            propName: "headerState",
            propType: "String",
            propDescription: "Sets the state of the Header component to display the proper icon.",
            options: ['default', 'loggedIn', 'closeProfile']
        }
    ],
    reactComponent: ""
}

const HeaderExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default () => {
    return (
        <HeaderExampleContainer>
            <ComponentDocTemplate templateInfo={HeaderTemplateObj} />
        </HeaderExampleContainer>
    )
}
