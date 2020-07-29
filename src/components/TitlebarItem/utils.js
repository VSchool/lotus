import * as colors from "../../colors"

export function displayItemState(status) {
    switch (status) {
        case "active":
            return {
                border: `4px solid ${colors.green.lighter}`,
                opacity: "1.0",
                lineOneColor: colors.gray.base,
                lineTwoColor: colors.gray.lighter,
                checkmarkDisplay: "none"
            }
        case "inactive":
            return {
                border: `4px solid ${colors.black}`,
                opacity: "1.0",
                lineOneColor: colors.gray.base,
                lineTwoColor: colors.gray.lighter,
                checkmarkDisplay: "flex"
            }
        case "locked":
            return {
                border: `4px solid ${colors.black}`,
                opacity: "0.67",
                lineOneColor: colors.gray.base,
                lineTwoColor: colors.gray.lighter,
                checkmarkDisplay: "none"
            }

        default:
            return {
                border: "red",
                opacity: "1.0",
                lineOneColor: "lightcoral",
                lineTwoColor: "dodgerblue",
                checkmarkDisplay: "inline-block"
            }
    }
}
