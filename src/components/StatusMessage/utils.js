import { blue } from '../../colors/blue'
import { green } from '../../colors/green'
import { yellow } from '../../colors/yellow'
import { pink } from '../../colors/pink'


export function statusMessageStatus(status, err) {
    switch (status) {
        case "neutral":
            return {
                containerBackground: blue.lightest,
                containerBorder: blue.light,
                indicatorBackground: blue.base,
                indicatorBorder: blue.base,
                indicatorText: ":)",
                messageText: "Welcome to your V School Application. Get started by completing the tasks below!"
            }
    }
}