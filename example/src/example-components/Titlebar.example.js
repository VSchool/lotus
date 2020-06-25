import React, { Fragment } from 'react'

import { Titlebar } from '@vschool/lotus'

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Titlebar</h1>
            <p>Media query currently at 768px. More documentation to come.</p>
            <Titlebar stepOne={'active'} stepTwo={'inactive'} stepThree={'locked'} />
            <br></br>
        </Fragment>
    )
}