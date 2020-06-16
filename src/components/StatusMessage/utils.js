import { blue } from '../../colors/blue'
import { green } from '../../colors/green'
import { yellow } from '../../colors/yellow'
import { pink } from '../../colors/pink'


export function statusMessageStatus(status, err) {
    switch (status) {
        case "neutral":
            return {
                containerBackground: blue.lightest,
                containerBorder: `2px solid ${blue.light}`,
                indicatorBackground: blue.base,
                indicatorBorder: `1px solid ${blue.base}`,
                indicatorText: ":)",
                messageText: "Welcome to your V School Application. Get started by completing the tasks below!",
            }
        case "success":
            return {
                containerBackground: green.lightest,
                containerBorder: `2px solid ${green.light}`,
                indicatorBackground: green.base,
                indicatorBorder: `1px solid ${green.base}`,
                indicatorText: ":)",
                messageText: "Congrats! You’ve successfully subscribed to our newsletter."
            }
        case "warning":
            return {
                containerBackground: yellow.lightest,
                containerBorder: `2px solid ${yellow.light}`,
                indicatorBackground: yellow.base,
                indicatorBorder: `1px solid ${yellow.base}`,
                indicatorText: "!",
                messageText: "Your “Portfolio” project is due in 7 days."
            }
        case "fail":
            return {
                containerBackground: pink.lightest,
                containerBorder: `2px solid ${pink.light}`,
                indicatorBackground: pink.base,
                indicatorBorder: `1px solid ${pink.base}`,
                indicatorText: "!",
                messageText: "Your “Portfolio” project is due in 7 days."
            }
        default: 
            return {
                containerBackground: pink.darker,
                containerBorder: `2px solid ${pink.darker}`,
                indicatorBackground: yellow.base,
                indicatorBorder: `1px solid ${green.base}`,
                indicatorText: "!",
                messageText: "DEFAULT CASE"
            }
    }
}