import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const StatusMessageTemplateObj = {
    componentName: "Status Message",
    componentDescription: "Display a message to users.",
    exampleText: `<StatusMessage status={string} />`,
    templateProps: [
        {
            propName: "status",
            propType: "String",
            propDescription: 'Sets the "state" of the Status Message.',
            options: ["neutral", "success", "warning", "fail"]
        }
    ],
    reactComponent: ""
}

const StatusMessageContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default () => {
    return (
        <StatusMessageContainer>
            <ComponentDocTemplate templateInfo={StatusMessageTemplateObj} />
        </StatusMessageContainer>
    )
}
