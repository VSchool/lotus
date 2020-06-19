import React from 'react'
import styled from 'styled-components'

import { Button } from '../Button'

import { white, black, gray } from '../../colors/gray'
import { blue } from '../../colors/blue'



const ModalContainer = styled.div`
    padding: 64px 88px;
    position: relative;
    width: 848px;
    height: 448px;
    background: #FBF9F7;
    border: 2px solid ${gray.base};
    box-sizing: border-box;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14);
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 672px;
    height: 320px;
    margin: 0px 0px 0px 0px;
`

const ModalHeadline = styled.h3`
    max-width: 584px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    color: ${black};
    margin: 0px 0px 0px 0px;
`

const ModalSubtitle = styled.h4`
    width: 584px;
    font-family: "aktiv-grotesk-extended";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    margin: 24px 0px 0px 0px;
`

const ModalBody = styled.p`
    max-width: 672px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${gray.darker};
    margin: 16px 0px 0px 0px;
`

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;
    width: 510px;
    align-self: flex-end;
    margin: 40px 0px 0px 0px;
`

const DeclineButton = styled(Button)`
    width: 184px;
    height: 56px;
    margin: 0px 12px 0px 0px;
    color: ${black};
    background: ${white};
`

const ApplyButton = styled(Button)`
    width: 296px;
    height: 56px;
    margin: 0px 0px 0px 12px;
`

function Modal() {
    return (
        <div>
            <ModalContainer>
                <ContentContainer>
                    <ModalHeadline>Are you planning on applying for any V School Scholarships?</ModalHeadline>
                    <ModalSubtitle>Complete the  Scholarship Application</ModalSubtitle>
                    <ModalBody>If you are interested in applying for scholarships, make sure to apply. Then we tell them how many people are usually rewarded with something.</ModalBody>
                    <ButtonRow>
                        <DeclineButton>No, Thanks</DeclineButton>
                        <ApplyButton>Apply for Scholarships</ApplyButton>
                    </ButtonRow>
                </ContentContainer>
            </ModalContainer>
        </div>
    )
}

export default Modal