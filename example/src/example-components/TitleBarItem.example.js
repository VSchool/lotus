import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from "../components/ComponentDocTemplate"

const TitlebarItemTemplateObj = {
    componentName: "Titlebar Item",
    componentDescription:
        "Assist the titlebar component by displaying each application process step.",
    exampleText: `<TitlebarItem titlebarItemState={string} lineOneText={string} lineTwoText={string} />`,
    templateProps: [
        {
            propName: "titlebarItemState",
            propType: "String",
            propDescription: 'Sets the "state" of the titlebar item.',
            options: ["active", "inactive", "locked"]
        },
        {
            propName: "lineOneText",
            propType: "String",
            propDescription: "Text string that is displayed in the first line of the comopnent.",
            options: ["accepts any String"]
        },
        {
            propName: "lineTwoText",
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
