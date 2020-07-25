export function returnComponentObj(name) {
    switch (name) {
        case 'Controls':
            return 'Controls Hit'
            // console.log('Controls Match')
        default: 
            console.log('Default Case Hit')
            return 'Nope'
    }
}