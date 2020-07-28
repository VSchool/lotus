import * as colors from "../../colors"

export function itemStatus(itemStatus) {
    switch (itemStatus) {
        case "active":
            return {
                border: `4px solid ${colors.green.lighter}`,
                opacity: "1.0",
                titleColor: colors.gray.base,
                subtitleColor: colors.gray.lighter,
                checkmarkDisplay: "none"
            }
        case "inactive":
            return {
                border: "none",
                opacity: "1.0",
                titleColor: colors.gray.base,
                subtitleColor: colors.gray.lighter,
                checkmarkDisplay: "inline-block"
            }
        case "locked":
            return {
                border: "none",
                opacity: "0.67",
                titleColor: colors.gray.base,
                subtitleColor: colors.gray.lighter,
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
