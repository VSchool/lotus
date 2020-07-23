import React, { Fragment } from 'react'
import { Modal } from '@vschool/lotus'

const title = 'Are you planning on applying for any V School Scholarships?'
const subtitle = 'Complete the  Scholarship Application'
const body = 'If you are interested in applying for scholarships, make sure to apply. Then we tell them how many people are usually rewarded with something.'

export default () => {
    return (
        <Fragment>
            <br></br>
            <Modal title={title} subtitle={subtitle} body={body} />
        </Fragment>
    )
}