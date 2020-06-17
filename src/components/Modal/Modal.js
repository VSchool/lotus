import React from 'react'
import styled from 'styled-components'

import { Button } from '../Button'

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 88px;
    position: relative;
    width: 848px;
    height: 448px;
    background: #FBF9F7;
    border: 2px solid #D8D4CF;
    box-sizing: border-box;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14);
    @media (max-width: 768px) {
        padding: 0px;
        max-width: 376px;
        /* border: 4px solid black; */
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 0px;
    width: 672px;
    height: 320px;
    margin: 0px 10px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        max-width: 328px;
        height: 472px;
        /* border: 4px solid pink; */
    }
`

const ModalTitle = styled.h3`
width: 583px;
height: 76px;
font-family: "aktiv-grotesk";
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 38px;
color: #21201F;
margin: 0px 0px 12px 0px;
box-sizing: border-box;
@media (max-width: 768px) {
    margin: 32px 0px 12px 0px;
    max-width: 100%;
    height: 88px;
    /* border: 1px solid green; */
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
}
`

const ModalSubtitle = styled.p`
    width: 583px;
    height: 24px;
    font-family: "aktiv-grotesk-extended";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #456AE2;
    margin: 12px 0px 8px 0px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        margin: 12px 0px 8px 0px;
        max-width: 100%;
        height: 40px;
        /* border: 1px solid lightblue; */
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
        text-transform: uppercase;
}
`

const ModalBody = styled.p`
    width: 672px;
    height: 84px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #514F4B;
    margin: 8px 0px 20px 0px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        margin: 8px 0px 20px 0px;
        max-width: 328px;
        height: 144px;
        /* border: 1px solid gold; */
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    width: 510px;
    height: 56px;
    align-self: flex-end;
    margin: 20px 0px 0px 0px;
    box-sizing: border-box;
    /* border: 1px solid lightblue; */
    @media (max-width: 768px) {
        margin: 20px 0px 0px 0px;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 144px;
        /* border: 1px solid gold; */
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
    }
`

function Modal() {
    return (
        <ModalContainer>
            <ContentContainer>
                <ModalTitle>Are you planning on applying for any V School Scholarships? </ModalTitle>
                <ModalSubtitle>Complete the  Scholarship Application</ModalSubtitle>
                <ModalBody>If you are interested in applying for scholarships, make sure to apply. Then we tell them how many people are usually rewarded with something.</ModalBody>
                <ButtonContainer>
                    <Button buttonStyle='primary-light' buttonSize='lg'>No, Thanks</Button>
                    <Button buttonStyle="primary-dark" buttonSize="lg">Apply for Scholarships</Button>
                </ButtonContainer>
            </ContentContainer>
        </ModalContainer>
    )
}

export default Modal