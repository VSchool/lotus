import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const TaskbarTemplateObj = {
    componentName: "Taskbar",
    componentDescription: "Provide users with a way to know what to do.",
    exampleText: `<Taskbar title={string} task={string} />`,
    templateProps: [
        {
            propName: "firstLineMessage",
            propType: "String",
            propDescription: "Text string that is displayed in the first line of the taskbar.",
            options: ["accepts any String"]
        },
        {
            propName: "secondLineMessage",
            propType: "String",
            propDescription: "Text string that is displayed in the second line of the taskbar.",
            options: ["accepts any String"]
        }
    ],
    reactComponent: ""
}

const TaskbarExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default () => {
    return (
        <TaskbarExampleContainer>
            <ComponentDocTemplate templateInfo={TaskbarTemplateObj} />
        </TaskbarExampleContainer>
    )
}
