import * as colors from "../../colors"

export function setStatus(status) {
    switch (status) {
        case "success":
            return {
                iconText: ":)",
                iconColor: colors.green.base,
                textBackground: colors.green.lightest,
                textBorder: colors.green.light,
            }
        case "warning":
            return {
                iconText: "!",
                iconColor: colors.yellow.base,
                textBackground: colors.yellow.lightest,
                textBorder: colors.yellow.light,
            }
        case "error":
            return {
                iconText: "!",
                iconColor: colors.red.base,
                textBackground: colors.red.lightest,
                textBorder: colors.red.light,
            }
        case "neutral":
        default:
            return {
                iconText: ":)",
                iconColor: colors.blue.base,
                textBackground: colors.blue.lightest,
                textBorder: colors.blue.light,
            }
    }
}
