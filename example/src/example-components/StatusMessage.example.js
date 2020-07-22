import React  from 'react'
import styled from 'styled-components'
import { StatusMessage } from '@vschool/lotus'

const StatusMessageContainer = styled.div`
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

const PropDesc = styled.p`
    margin: 16px 0px 8px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
`

const neutralMessage = 'Welcome to your V School Application. Get started by completing the tasks below!'
const successMessage = 'Congrats! You’ve successfully subscribed to our newsletter.'
const warningMessage = 'Your “Portfolio” project is due in 7 days.'
const failMessage = 'Your “Empathy Map” assignment is 5 days late. Get after it!'


export default () => {
    return (
        <StatusMessageContainer>
            <SectionName>Examples</SectionName>
            <PropDesc>'neutral'</PropDesc>
            <StatusMessage status={'neutral'} message={neutralMessage} />
            <PropDesc>'success'</PropDesc>
            <StatusMessage status={'success'} message={successMessage} />
            <PropDesc>'warning'</PropDesc>
            <StatusMessage status={'warning'} message={warningMessage} />
            <PropDesc>'fail'</PropDesc>
            <StatusMessage status={'fail'} message={failMessage} />
        </StatusMessageContainer>
    )
}