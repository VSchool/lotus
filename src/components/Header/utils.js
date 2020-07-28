export function handleClearClick() {
    // // Useful for later
    // console.log('ClearClick Fired')
}

export function handleLoggedInClick() {
    let profile = document.getElementById('profileElement')
    if (profile.style.display === '') {
        profile.style.display = 'block'
    } else if (profile.style.display === 'block') {
        profile.style.display = ''
    }
}