import React, { Fragment } from 'react'
import { Profile } from '@vschool/lotus'

const user = {
    name: 'Namey Namerson',
    email: 'emailaddress@woah.com',
    phone: '###-###-####',
    course: 'Full-Stack Javascript',
    time: 'Full - Time'
}

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Profile</h1>
            <p>More documentation to come.</p>
            <Profile userName={user.name} userEmail={user.email} userPhone={user.phone} userCourse={user.course} userTime={user.time} />
            <br></br>
            <br></br>
        </Fragment>
    )
}