import React from "react"
import circleCheck from "../../assets/icons/circle_check.png"
// import circleInfo from "../../assets/icons/circle_info.svg"
import { red, green, gray } from "../../colors"

export { circleCheck }

export const CheckMark = ({ color = gray.dark }) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12ZM6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5ZM3.00007 6.31065L5.34103 8.71598L9.31069 4.87499L8.25004 3.81433L5.34103 6.59466L4.06073 5.24999L3.00007 6.31065Z"
            fill={color}
        />
    </svg>
)
