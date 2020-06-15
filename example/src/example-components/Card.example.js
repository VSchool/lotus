import React from 'react'

import { Card } from '@vschool/lotus'
import styled from 'styled-components'

export default () => {
    const CardExampleContainer = styled.div`
        width: 100%;
        height: 300px;
        background-color: #F3F3F3;
    `

    

    return (
        <CardExampleContainer>
            <h1>Cards</h1>
            <Card />
        </CardExampleContainer>
    )
}