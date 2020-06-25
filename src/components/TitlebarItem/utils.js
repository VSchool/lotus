import { black, gray } from '../../colors/gray'
import { green } from '../../colors/green'

export function itemStatus(status) {
    switch (status) {
        case 'active':
            return {
                border: `4px solid ${green.lighter}`,
                opacity: '1.0',
                titleText: 'Step 1',
                subtitleText: 'Background',
                setCircleDisplay: 'none',
            }
        case 'inactive':
            return {
                border: 'none',
                opacity: '0.8',
                titleText: 'Step 2',
                subtitleText: 'Application',
                setCircleDisplay: 'inline-block',


            }
        case 'locked':
            return {
                border: 'none',
                opacity: '0.67',
                titleText: 'Step 3',
                subtitleText: 'Enrollment',
                setCircleDisplay: 'none',


            }

        default:
            return {
                border: `4px solid red`,
                opacity: '0.3',
                titleText: 'Default',
                subtitleText: 'Default',
                setCircleDisplay: 'inline-block',

            }
    }
}