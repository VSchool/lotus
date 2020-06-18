import React from 'react'
import styled from 'styled-components'
import { StatusChip } from '../StatusChip'

import { black, gray } from '../../colors/gray'
import { blue } from '../../colors/blue'


const CardContainer = styled.div`
    position: relative;
    max-width: 352px;
    padding: 0px 0px 0px 0px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
`

const CardWrapper = styled.div`
    background: #FFFFFF;
    width: 100%;
    padding: 24px 24px 24px 24px;
    border: 1px solid ${gray.base};
    box-sizing: border-box;
    /* GOING TO NEED TO CHANGE THE BORDER-TOP SIZE DYNAMICALLY */
    border-top: 4px solid ${gray.base};
`

const CardTitle = styled.h5`
    margin: 0px 0px 8px 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: ${black};
`

const BottomWrapper = styled.div`
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const CardMessage = styled.p`
    margin: 0px;
    max-width: 216px;
    display: flex;
    align-items: center;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 24px;
    color: ${black};
    /* border: 1px solid green; */
`

const TextButton = styled.button`
    display: flex;
    align-items: baseline;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${blue.base};
    border: none;
    background: none;
`

function Card({ status, err}) {
    return (
        <CardContainer>
            <CardWrapper>
                <CardTitle>Initial Application</CardTitle>
                <StatusChip status={"not-started"} />
                    <BottomWrapper>
                        <CardMessage>Messaging about what needs to be completed</CardMessage>
                        <TextButton>Start</TextButton>
                    </BottomWrapper>
            </CardWrapper>
        </CardContainer>
    )
}

export default Card