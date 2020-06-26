import React, { Fragment } from 'react'
import { StatusMessage } from '@vschool/lotus'

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Status Message</h1>
            <StatusMessage status={'neutral'} />
            <br></br>
            <StatusMessage status={'success'}/>
            <br></br>
            <StatusMessage status={'warning'}/>
            <br></br>
            <StatusMessage status={'fail'}/>
            <br></br>
            <br></br>
        </Fragment>
    )
}