import React, { Fragment } from 'react'
import { StatusMessage} from '@vschool/lotus'

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Status Messages</h1>
            {/* <h2>Default Case</h2>
            <StatusMessage /> */}
            <h2>Neutrual Case</h2>
            <StatusMessage status={"neutral"} />
            <h2>Success Case</h2>
            <StatusMessage status={"success"} />
            <h2>Warning Case</h2>
            <StatusMessage status={"warning"} />
            <h2>Fail Case</h2>
            <StatusMessage status={"fail"} />
        </Fragment>
    )
}