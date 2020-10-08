import React from "react"
import { Titlebar, TitlebarItem } from "../components/Titlebar"

export default {
    title: "Components/Titlebar/Titlebar",
    component: Titlebar,
    parameters: {
        componentSubtitle: "A multi-step progress indicator",
    },
}

export const MultipleItems = (args) => (
    <Titlebar {...args} activeIndex={1}>
        <TitlebarItem>Background</TitlebarItem>
        <TitlebarItem>Application</TitlebarItem>
        <TitlebarItem>Enrollment</TitlebarItem>
    </Titlebar>
)

export const SingleItemCurrent = (args) => (
    <Titlebar {...args} activeIndex={0}>
        <TitlebarItem>Background</TitlebarItem>
    </Titlebar>
)

export const SingleItemComplete = (args) => (
    <Titlebar {...args} activeIndex={1}>
        <TitlebarItem>Background</TitlebarItem>
    </Titlebar>
)

export const CustomStepName = (args) => (
    <Titlebar {...args} activeIndex={2} stepName="Phase">
        <TitlebarItem>Background</TitlebarItem>
        <TitlebarItem>Application</TitlebarItem>
        <TitlebarItem>Enrollment</TitlebarItem>
    </Titlebar>
)
