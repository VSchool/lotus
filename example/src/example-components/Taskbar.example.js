import React, { Fragment } from 'react'
import { Taskbar } from '@vschool/lotus'

const newTask = 'FSJS - Aptitude Test'
const newTitle = 'Required'

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Taskbar</h1>
            <p>Media query currently at 768px. More documentation to come.</p>
            <Taskbar title={newTitle} task={newTask} />
        </Fragment>
    )
}