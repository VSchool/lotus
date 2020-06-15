import React from 'react'
import styled from 'styled-components'

function Card() {

    const CardContainer = styled.div`
        width: 500px;
        height: 500px;
        border: 1px solid dodgerblue;
    `

    const CardHeadlineText = styled.h1`
        color: red;
        border: 1px solid black;
    `

    return (
        <div>
            <CardHeadlineText>A Card</CardHeadlineText>
        </div>
    )
}

export default Card