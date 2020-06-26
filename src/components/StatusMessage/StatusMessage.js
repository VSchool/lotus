import React from 'react'
import styled from 'styled-components'

const StatusMesssageContainer = styled.div`
    position: relative;
    width: 378px;
    height: 128px;
    display: flex;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14);
    /* border: 1px solid lightcoral; */
`

const IndicatorContainer = styled.div`
    min-width: 56px;
    height: 100%;
    padding: 49px 19px 50px 19px;
    background: #456AE2;
    border: 1px solid #456AE2;
    box-sizing: border-box;
`

const IndicagtorText = styled.p`
    margin: 0px;
    display: flex;
    width: 18px;
    height: 29px;
    font-family: 'benton-sans';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    /* border: 1px dotted white; */

`

const ContentContainer = styled.div`
    background: #E3E8FA;
    border: 2px solid #859FEB;
    padding: 10px 24px 10px 16px;
    border-left: none;
    box-sizing: border-box;
`

const ContentText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* border: 1px dotted red; */
    color: #21201F;
`

function StatusMessage() {
    return (
        <StatusMesssageContainer>
            <IndicatorContainer>
                <IndicagtorText>:)</IndicagtorText>
            </IndicatorContainer>
            <ContentContainer>
                <ContentText>Welcome to your V School Application. Get started by completing your Background Information</ContentText>
            </ContentContainer>
        </StatusMesssageContainer>
    )
}

export default StatusMessage