import React from 'react'
import styled from 'styled-components'
import { Modal } from '@vschool/lotus'

const ModalExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const SectionName = styled.p`
    margin: 0px 0px 24px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

// const PropDesc = styled.p`
//     margin: 16px 0px 8px 0px;
//     font-family: 'aktiv-grotesk';
//     font-style: normal;
//     font-weight: 300;
//     font-size: 16px;
//     line-height: 19px;
//     color: rgba(0, 0, 0, 0.6);
//     box-sizing: border-box;
// `

const title = 'Are you planning on applying for any V School Scholarships?'
const subtitle = 'Complete the  Scholarship Application'
const body = 'If you are interested in applying for scholarships, make sure to apply. Then we tell them how many people are usually rewarded with something.'

export default () => {
    return (
        <ModalExampleContainer>
            <SectionName>Examples</SectionName>
            {/* <PropDesc>'not-started'</PropDesc> */}
            <Modal title={title} subtitle={subtitle} body={body} />
        </ModalExampleContainer>
    )
}