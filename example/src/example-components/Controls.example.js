import React, { Fragment } from 'react'
import { Controls } from '@vschool/lotus'

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Controls</h1>
            <p>Need to style the actual checkbox.</p>
            <Controls disabledStatus={false} />
            <Controls disabledStatus={true} />

        </Fragment>
    )
}