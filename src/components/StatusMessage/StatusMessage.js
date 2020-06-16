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

    const StatusMessageText = styled.p`
        margin: 0px;
        position: absolute;
        width: 928px;
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
        border: 1px solid lightcoral;
    `

    return (
        <StatusMessageContainer>
            {/* <StatusMessageText>Status message</StatusMessageText> */}
        </StatusMessageContainer>
    )
}

export default StatusMessage