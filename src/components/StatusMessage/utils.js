import { blue } from '../../colors/blue'
import { green } from '../../colors/green'
import { yellow } from '../../colors/yellow'
import { pink } from '../../colors/pink'


export function setStatus(status, message) {
    switch (status) {
        case 'neutral':
            return {
                indicatorText: ':)',
                indicatorColor: blue.base,
                indicatorBorder: `1px solid ${blue.base}`,
                contentBackground: blue.lightest,
                contentBorder: `2px solid ${blue.light}`,
                messageContent: message,
            }
        case 'success':
            return {
                indicatorText: ':)',
                indicatorColor: green.base,
                indicatorBorder: `1px solid ${green.base}`,
                contentBackground: green.lightest,
                contentBorder: `2px solid ${green.light}`,
                messageContent: message
            }
        case 'warning':
            return {
                indicatorText: '!',
                indicatorColor: yellow.base,
                indicatorBorder: `1px solid ${yellow.base}`,
                contentBackground: yellow.lightest,
                contentBorder: `2px solid ${yellow.light}`,
                messageContent: message
            }
        case 'fail':
            return {
                indicatorText: '!',
                indicatorColor: pink.base,
                indicatorBorder: `1px solid ${pink.base}`,
                contentBackground: pink.lightest,
                contentBorder: `2px solid ${pink.light}`,
                messageContent: message
            }
        default:
            return {
                indicatorColor: 'purple',
                indicatorBorder: `1px solid ${blue.darker}`,
                contentBackground: blue.lightest,
                contentBorder: `2px solid ${blue.light}`,
                messageContent: message
            }
    }
}