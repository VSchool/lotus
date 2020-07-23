import React, { Fragment } from 'react'
import { Card } from '@vschool/lotus'

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Card</h1>
            <p>Media query currently at 768px. More documentation to come.</p>
                <Card status={"default"} />
                <br></br>
                <Card status={"not-started"} />
                <br></br>
                <Card status={"up-next"} />
                <br></br>
                <Card status={"in-progress"} />
                <br></br>
                <Card status={"completed"} />
        </Fragment>
    )
}