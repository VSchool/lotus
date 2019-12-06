import * as colors from "../../colors"

export function determineButtonColors(props) {
    let backgroundColor, color, borderColor
    switch (props.color) {
        case "gray":
        default:
            borderColor = colors.black
            if (props.inverse) {
                backgroundColor = colors.white
                color = colors.gray.darker
            } else {
                backgroundColor = colors.gray.darker
                color = colors.white
            }
            break
    }

    return { backgroundColor, color, borderColor }
}
