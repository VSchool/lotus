import React from "react"
import Switch from "../../components/Controls/Switch"

export default {
    title: "Components/Controls/Switch",
    component: Switch,
    argTypes: { onChange: { action: "changed" } },
    parameters: {
        componentSubtitle: "A stylized toggle switch component.",
    },
}

const Template = (args) => <Switch {...args} />

export const SwitchOff = Template.bind({})
SwitchOff.args = {
    children: "Off",
    on: false,
}

export const SwitchOn = Template.bind({})
SwitchOn.args = {
    children: "On",
    on: true,
}

export const DisabledSwitchOff = Template.bind({})
DisabledSwitchOff.args = {
    children: "Disabled Off",
    on: false,
    disabled: true,
}

DisabledSwitchOff.parameters = {
    docs: {
        storyDescription: "Switch disabled in the off position",
    },
}
export const DisabledSwitchOn = Template.bind({})
DisabledSwitchOn.args = {
    children: "Disabled On",
    disabled: true,
    on: true,
}

DisabledSwitchOn.parameters = {
    docs: {
        storyDescription: "Switch disabled in the on position",
    },
}
