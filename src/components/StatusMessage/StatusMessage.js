import React from 'react'
import styled from 'styled-components'

function StatusMessage({status, err}) {

    const StatusMessageContainer = styled.div`
        position: relative;
        width: 1024px;
        height: 56px;
        display: flex;
        align-content: center;
        background: #E3E8FA;
        border: 2px solid #859FEB;
        box-sizing: border-box;
        box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14);
    `

    const IndicatorContainer = styled.div`
        // box-sizing: border-box;
        // position: absolute;
        width: 56px;
        height: 100%;
        // left: 0px;
        // top: 0%;
        // bottom: 0%;

    `

    const IndicatorWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        
        background: #456AE2;
        
        border: 1px solid #456AE2;
        box-sizing: border-box;
    `

    const IndicatorText = styled.h4`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 29px;
        height: 29px;
        
        font-family: Benton Sans;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 29px;
        
        color: #FFFFFF;
    `

    

    const StatusMessageText = styled.p`
        margin: 0px;
        position: absolute;
        max-width: 928px;
        height: 24px;
        left: 72px;
        top: calc(50% - 24px/2);

        display: flex;
        align-items: center;

        font-family: Aktiv Grotesk;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        // border: 1px solid lightcoral;
    `


    

    return (
        <StatusMessageContainer>
            <IndicatorContainer>
                <IndicatorWrapper>
                    <IndicatorText>:)</IndicatorText>
                </IndicatorWrapper>
            </IndicatorContainer>
            <StatusMessageText>Welcome to your V School Application. Get started by completing the tasks below!</StatusMessageText>
        </StatusMessageContainer>
    )
}

export default StatusMessage