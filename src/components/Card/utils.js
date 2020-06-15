import { gray } from '../../colors/gray'
import { pink } from '../../colors/pink'
import { yellow } from '../../colors/yellow'
import { green } from '../../colors/green'

import { orange } from '../../colors/orange'

export function decideCardStatus(status, err) {
    console.log(1111, status)
    switch (status) {
        case "not-started":
            return {
                headlineText: status,
                backgroundColor: gray.base
            }
        case "in-progress":
            return {
                headlineText: status,
                backgroundColor: yellow.base
            }
        case "up-next":
            return {
                headlineText: status,
                backgroundColor: pink.base
            }
        case "completed":
            return {
                headlineText: status,
                backgroundColor: green.base
            }
        default:
            return {
                headlineText: "default",
                backgroundColor: orange.base
            }
    }
}