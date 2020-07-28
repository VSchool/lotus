import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const FooterTemplateObj = {
    componentName: "Footer",
    componentDescription: "Give users constant access to help.",
    exampleText: `<Footer />`,
    templateProps: [
        {
            propName: "n/a",
            propType: "n/a",
            propDescription: "This component accepts no props.",
            options: ["n/a"]
        }
    ],
    reactComponent: ""
}

const FooterExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default () => {
    return (
        <FooterExampleContainer>
            <ComponentDocTemplate templateInfo={FooterTemplateObj} />
        </FooterExampleContainer>
    )
}
