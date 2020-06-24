import React from 'react'
import styled from 'styled-components'

import circleCheck from '../../assets//icons/circleCheck.svg'

const ItemContainer = styled.div`
    position: relative;
    max-width: 138px;
    height: 48px;
    padding: 0px 8px 0px 18px;
    background: #21201F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;

    @media (min-width: 768px) {
        
    }
`

const ItemTitle = styled.p`
    margin: 0px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #D8D4CF;
    opacity: 0.8;
    box-sizing: border-box;

    /* border: 1px dotted red; */
`

const BottomWrapper = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin: 2px 0px 0px 0px;

    /* border: 1px solid blue; */
`

const ItemText = styled.p`
    margin: 0px 0px 0px 4px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: #FBF9F7;
    opacity: 0.8;
    box-sizing: border-box;

    /* border: 1px dotted orange; */
`



function TitlebarItem() {
    return (
        <ItemContainer>
            <ItemTitle>Step 1</ItemTitle>
            <BottomWrapper>
                <img src={circleCheck} alt='Complete' />
                <ItemText>Apply</ItemText>
            </BottomWrapper>
        </ItemContainer>
    )
}

export default TitlebarItem