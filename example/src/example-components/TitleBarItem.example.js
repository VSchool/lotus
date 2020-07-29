import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const TitlebarItemTemplateObj = {
    componentName: "Titlebar Item",
    componentDescription: "Assist the titlebar component by displaying each application process step.",
    exampleText: `<TitlebarItem itemState={string} firstLineMessage={string} secondLineMessage={string} />`,
    templateProps: [
        {
            propName: "itemState",
            propType: "String",
            propDescription: 'Sets the "state" of the titlebar item.',
            options: ["active", "inactive", "locked"]
        },
        {
            propName: "firstLineMessage",
            propType: "String",
            propDescription: "Text string that is displayed in the first line of the comopnent.",
            options: ["accepts any String"]
        },
        {
            propName: "secondLineMessage",
            propType: "String",
            propDescription: "Text string that is displayed in the second line of the comopnent.",
            options: ["accepts any String"]
        }
    ],
    reactComponent: ""
}

const TitlebarItemExmpleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default () => {
    return (
        <TitlebarItemExmpleContainer>
            <ComponentDocTemplate templateInfo={TitlebarItemTemplateObj} />
        </TitlebarItemExmpleContainer>
    )
}
