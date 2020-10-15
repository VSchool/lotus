import React from "react"
import { TextInput } from "./index"

export default {
    title: "Components/Controls/TextInput",
    component: TextInput,
    argTypes: { onChange: { action: "changed" } },
    parameters: {
        componentSubtitle: "A stylized text input component.",
    },
}

const Template = (args) => <TextInput {...args} />

export const Default = Template.bind({})
Default.args = {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "Enter name here",
}

Default.parameters = {
    docs: {
        storyDescription: "Hover and focus to see different states",
    },
}

export const FilledValid = Template.bind({})
FilledValid.args = {
    name: "firstName",
    type: "text",
    label: "First Name",
    hasError: false,
    value: "Bob Ziroll",
}

FilledValid.parameters = {
    docs: {
        storyDescription: "Darker border when filled and blurred",
    },
}

export const HasErrorOverride = Template.bind({})
HasErrorOverride.args = {
    name: "firstName",
    type: "text",
    label: "First Name",
    hasError: true,
}

HasErrorOverride.parameters = {
    docs: {
        storyDescription: `
When the developer sets \`hasError\` to \`true\`. This takes priority over any internal validations being handled by the \`TextInput\`, and is useful for applying errors from the outside, in.

It's best to include some \`validationText\` to help indicate what the error is all about.
`,
    },
}
