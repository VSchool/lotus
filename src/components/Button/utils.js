import * as colors from "../../colors"

export function determineButtonColors(props) {
    let backgroundColor, color, borderColor
    switch (props.buttonStyle) {
        case "primary-dark":
        default:
            borderColor = colors.black
            backgroundColor = colors.gray.darker
            color = colors.white
            break
        case "primary-light":
            borderColor = colors.black
            backgroundColor = colors.gray.lighter
            color = colors.black
            break
        case "secondary-dark":
            borderColor = colors.black
            backgroundColor = colors.gray.lighter
            color = colors.black
            break
        case "secondary-light":
            borderColor = colors.white
            backgroundColor = "transparent"
            color = colors.white
            break
    }

    return { backgroundColor, color, borderColor }
}

export function determineButtonSize(props) {
    let height
    switch (props.buttonSize) {
        case "sm":
            height = "32px"
            break
        case "md":
            height = "40px"
            break
        case "lg":
        default:
            height = "48px"
            break
        case "xl":
            height = "56px"
            break
    }
    return { height }
}
