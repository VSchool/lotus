import { gray } from '../../colors/gray'
import { pink } from '../../colors/pink'
import { yellow } from '../../colors/yellow'
import { green } from '../../colors/green'

export function findCardStatus(status) {
    switch (status) {
        case 'not-started':
            return {
                topBorder: `4px solid ${gray.base}`,
                rightBorder: `1px solid ${gray.base}`,
                bottomBorder: `1px solid ${gray.base}`,
                leftBorder: `1px solid ${gray.base}`,
                cardStatus: status,
                titleText: 'Not Started',
                messageText: 'Messaging about what needs to be completed'
            }
        case 'up-next':
            return {
                topBorder: `4px solid ${pink.base}`,
                rightBorder: `4px solid ${pink.base}`,
                bottomBorder: `4px solid ${pink.base}`,
                leftBorder: `4px solid ${pink.base}`,
                cardStatus: status,
                titleText: 'Up Next',
                messageText: 'Messaging about what needs to be completed'
            }
        case 'in-progress':
            return {
                topBorder: `4px solid ${yellow.base}`,
                rightBorder: `1px solid ${gray.base}`,
                bottomBorder: `1px solid ${gray.base}`,
                leftBorder: `1px solid ${gray.base}`,
                cardStatus: status,
                titleText: 'In Progress',
                messageText: 'Messaging about what needs to be completed'
            }
        case 'completed':
            return {
                topBorder: `4px solid ${green.base}`,
                rightBorder: `1px solid ${gray.base}`,
                bottomBorder: `1px solid ${gray.base}`,
                leftBorder: `1px solid ${gray.base}`,
                cardStatus: status,
                titleText: 'Complete',
                messageText: 'Messaging about what needs to be completed'
            }
        default: 
            return {
                topBorder: `4px solid ${gray.base}`,
                rightBorder: `1px solid ${gray.base}`,
                bottomBorder: `1px solid ${gray.base}`,
                leftBorder: `1px solid ${gray.base}`,
                cardStatus: status,
                titleText: 'Default',
                messageText: 'Messaging about what needs to be completed'            }
    }
}