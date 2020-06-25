import React, { Fragment } from 'react'
import { TitlebarItem } from '@vschool/lotus'

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Titlebar Item</h1>
            <TitlebarItem status={'active'} />
            <br></br>
            <TitlebarItem status={'inactive'} />
            <br></br>
            <TitlebarItem status={'locked'} />
            <br></br>
            <TitlebarItem status={'nostatus'} />
            <br></br>

        </Fragment>
    )
}