import { yellow } from "../../colors/yellow"
import { gray } from "../../colors/gray"
import { green } from "../../colors/green"
import { pink } from "../../colors/pink"

export function decideChipStatus(status, err) {
    switch (status) {
        case "in-progress":
            return {
                border: `1px solid ${yellow.base}`,
                backgroundColor: yellow.lightest,
                text: "in progress"
            }
        case "not-started":
            return {
                border: `1px solid ${gray.dark}`,
                backgroundColor: gray.light,
                text: "not started"
            }
        case "completed":
            return {
                border: `1px solid ${green.base}`,
                backgroundColor: green.lightest,
                text: "completed"
            }
        case "up-next":
            return {
                border: `1px solid ${pink.base}`,
                backgroundColor: pink.lightest,
                text: "up next"
            }
        case "err":
            return {
                border: `1px solid ${pink.base}`,
                backgroundColor: pink.lightest,
                text: err
            }
        default:
            return {
                border: `1px solid ${gray.dark}`,
                backgroundColor: gray.light,
                text: "default"
            }
    }
}
