import React from "react"
import { Banner } from "./index"

export default {
    title: "Atomic/Banner",
    component: Banner,
}

const Template = (args) => <Banner {...args}></Banner>

export const Neutral = Template.bind({})
Neutral.args = {
    status: "neutral",
    children:
        "Welcome to your V School Application. Get started by completing your Background Information.",
}

export const Success = Template.bind({})
Success.args = {
    status: "success",
    children: "Congratulations! You've completed your application!",
}

export const Warning = Template.bind({})
Warning.args = {
    status: "warning",
    children: "Your form is still invalid. Make sure to complete the items listed below.",
}

export const Error = Template.bind({})
Error.args = {
    status: "error",
    children:
        "There was a problem submitting your request. Please try again later, or contact as directly for help.",
}
