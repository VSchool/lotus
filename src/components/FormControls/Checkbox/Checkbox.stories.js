import React from "react"
import Checkbox from "./index"

export default {
    title: "Components/FormControls/Checkbox",
    component: Checkbox,
    argTypes: { onChange: { action: "changed" } },
    parameters: {
        componentSubtitle: "A stylized checkbox component.",
    },
}

const Template = (args) => <Checkbox {...args} />

export const UncheckedCheckbox = Template.bind({})
UncheckedCheckbox.args = {
    children: "I agree to the terms and conditions",
    checked: false,
}

export const CheckedCheckbox = Template.bind({})
CheckedCheckbox.args = {
    children: "I agree to the terms and conditions",
    checked: true,
}

export const DisabledUncheckedCheckbox = Template.bind({})
DisabledUncheckedCheckbox.args = {
    children: "I agree to the terms and conditions",
    checked: false,
    disabled: true,
}

export const DisabledCheckedCheckbox = Template.bind({})
DisabledCheckedCheckbox.args = {
    children: "I agree to the terms and conditions",
    disabled: true,
    checked: true,
}

export const ChildrenElementsCheckbox = (args) => (
    <Checkbox {...args} checked={false}>
        I agree to the <a href="https://google.com">Terms & Conditions</a>
    </Checkbox>
)
