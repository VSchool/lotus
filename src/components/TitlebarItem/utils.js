import { gray } from "../../colors/gray"
import { green } from "../../colors/green"

export function itemStatus(itemStatus) {
    switch (itemStatus) {
        case "active":
            return {
                border: `4px solid ${green.lighter}`,
                opacity: "1.0",
                titleColor: gray.base,
                subtitleColor: gray.lighter,
                checkmarkDisplay: "none"
            }
        case "inactive":
            return {
                border: "none",
                opacity: "1.0",
                titleColor: gray.base,
                subtitleColor: gray.lighter,
                checkmarkDisplay: "inline-block"
            }
        case "locked":
            return {
                border: "none",
                opacity: "0.67",
                titleColor: gray.base,
                subtitleColor: gray.lighter,
                checkmarkDisplay: "none"
            }

        default:
            return {
                border: "red",
                opacity: "1.0",
                titleColor: "lightcoral",
                subtitleColor: "dodgerblue",
                checkmarkDisplay: "inline-block"
            }
    }
}
