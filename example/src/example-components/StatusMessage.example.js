import React, { Fragment } from 'react'
import { StatusMessage } from '@vschool/lotus'

const neutralMessage = 'Welcome to your V School Application. Get started by completing the tasks below!'
const successMessage = 'Congrats! You’ve successfully subscribed to our newsletter.'
const warningMessage = 'Your “Portfolio” project is due in 7 days.'
const failMessage = 'Your “Empathy Map” assignment is 5 days late. Get after it!'


export default () => {
    return (
        <Fragment>
            <br></br>
            {/* <h1>Status Message</h1>
            <p>Media query currently at 768px. More documentation to come.</p> */}
            <StatusMessage status={'neutral'} message={neutralMessage} />
            <br></br>
            <StatusMessage status={'success'} message={successMessage} />
            <br></br>
            <StatusMessage status={'warning'} message={warningMessage} />
            <br></br>
            <StatusMessage status={'fail'} message={failMessage} />
            <br></br>
            <br></br>
        </Fragment>
    )
}