import React, { Fragment } from 'react'
import { TitlebarItem } from '@vschool/lotus'

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Titlebar Item</h1>
            <p>Media query currently at 768px. More documentation to come.</p>
            <TitlebarItem status={'active'}  title={'Step 1'} subtitle={'Background'} />
            <br></br>
            <TitlebarItem status={'inactive'}  title={'Step 2'} subtitle={'Application'}   />
            <br></br>
            <TitlebarItem status={'locked'}  title={'Step 3'} subtitle={'Enrollment'}  />
            <br></br>
        </Fragment>
    )
}