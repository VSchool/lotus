import React from 'react'
import styled from 'styled-components'

function Card() {

    const CardContainer = styled.div`
        width: 500px;
        height: 200px;
        background-color: dodgerblue;
    `

    const CardTitle = styled.h2`
        color: white;
    `

    return (
        <CardContainer>
            <CardTitle>Title</CardTitle>
        </CardContainer>
    )
}

export default Card