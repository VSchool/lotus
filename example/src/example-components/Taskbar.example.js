import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const TaskbarTemplateObj = {
    componentName: "Taskbar",
    componentDescription: "Provide users with a way to know what to do.",
    exampleText: `<Taskbar title={string} task={string} />`,
    templateProps: [
        {
            propName: "title",
            propType: "String",
            propDescription: "Text string that is displayed in the title of the taskbar.",
            options: ["accepts any String"]
        },
        {
            propName: "task",
            propType: "String",
            propDescription: "Text string that is displayed in the task area of the taskbar.",
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
