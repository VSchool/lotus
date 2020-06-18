import accountCircle from '../../assets/icons/account-circle24px.svg'
import clearX from '../../assets/icons/clear24px.svg'

// console.log(accountCircle)

export function getHeaderType(status) {
    switch (status) {
        case "default-header":
            return {
                src: {accountCircle}
            }
        case "close-header":
            return {
                src: {clearX}
            }
    }
}