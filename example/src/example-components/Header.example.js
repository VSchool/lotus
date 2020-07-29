import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const HeaderTemplateObj = {
    componentName: "Header",
    componentDescription:
        "Give users an exit, a way back, and a way to know their logged in status.",
    exampleText: `<Header userLoggedIn={false} />`,
    templateProps: [
        {
            propName: "userLoggedIn",
            propType: "Boolean",
            propDescription: "Header state is set by user logged in status.",
            options: [false, true]
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
