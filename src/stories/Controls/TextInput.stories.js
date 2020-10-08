import React from "react"
import TextInput from "../../components/Controls/TextInput"

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
    hasError: false,
    placeholder: "Enter name here",
}

Default.parameters = {
    docs: {
        storyDescription: "Also, hover and focus to see different states",
    },
}

export const Filled = Template.bind({})
Filled.args = {
    name: "firstName",
    type: "text",
    label: "First Name",
    hasError: false,
    value: "Bob Ziroll",
}

Filled.parameters = {
    docs: {
        storyDescription: "Darker border when filled and blurred",
    },
}

export const Invalid = Template.bind({})
Invalid.args = {
    name: "firstName",
    type: "text",
    label: "First Name",
    hasError: true,
}

Invalid.parameters = {
    docs: {
        storyDescription: "When `hasError` is `true`",
    },
}
