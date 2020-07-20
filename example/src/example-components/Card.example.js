import React from 'react'
import styled from 'styled-components'
import Table from '../components/Table'
import { Card } from '@vschool/lotus'

const CardExampleContainer = styled.div`

    border: 1px solid lightcoral;
`

const ComopnentName = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const OverviewText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
`

export default () => {
    return (
        <CardExampleContainer>
            <ComopnentName>Card</ComopnentName>
            <OverviewText>This component is used for whatever it is used for.</OverviewText>
            <Table />
            <Card status={'in-progress'} />
        </CardExampleContainer>
        
    )
}