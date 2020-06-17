import React, { Fragment } from 'react'
import { Header } from '@vschool/lotus'

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Headers</h1>
            <Header status={'default-header'} />
            <Header status={'close-header'} />
        </Fragment>
    )
}