import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Card } from '@vschool/lotus'

const RowOneContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 0px 0px 0px;
`

const RowTwoContainer = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 0px 0px 0px;
`

export default () => {
    return (
        <Fragment>
            <br></br>
            <h1>Card</h1>
            <RowOneContainer>
                <Card status={"not-started"} />
                <Card status={"up-next"} />
                <Card status={"in-progress"} />
            </RowOneContainer>

            <RowTwoContainer>
                <Card status={"completed"} />
                <Card status={"default"} />
            </RowTwoContainer>
        </Fragment>

    )
}