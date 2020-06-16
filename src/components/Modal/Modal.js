import React from 'react'
import styled from 'styled-components'

import { Button } from '../Button'

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 64px 88px;
    position: relative;
    width: 848px;
    height: 448px;
    background: #FBF9F7;
    border: 2px solid #D8D4CF;
    box-sizing: border-box;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14);
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    position: absolute;
    width: 672px;
    height: 320px;
    left: 88px;
    top: 64px;
    flex: none;
    order: 0;
    align-self: center;
    margin: 0px 10px;
    box-sizing: border-box;

    /* border: 1px solid red; */
`

const ModalTitle = styled.h3`
width: 583px;
height: 76px;
/* border: 1px solid lightcoral; */
font-family: "aktiv-grotesk";
/* font-family: Aktiv Grotesk; */
font-style: normal;
font-weight: 900;
font-size: 32px;
line-height: 38px;
color: #21201F;
/* flex: none;
order: 0;
align-self: center; */
margin: 0px 0px 12px 0px;
box-sizing: border-box;
`

const ModalSubtitle = styled.p`
    width: 583px;
    height: 24px;
    /* font-family: Aktiv Grotesk Ex; */
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
    /* border: 1px solid green; */
`

const ModalBody = styled.p`
    width: 672px;
    height: 84px;
    /* font-family: Aktiv Grotesk; */
    font-family: "aktiv-grotesk";

    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #514F4B;
    /* flex: none;
    order: 1;
    align-self: center; */
    margin: 8px 0px 20px 0px;
    box-sizing: border-box;
    /* border: 1px solid orange; */
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    /* position: static; */
    width: 510px;
    height: 56px;
    /* right: 0px;
    top: 264px; */
    /* flex: none;
    order: 1; */
    align-self: flex-end;
    margin: 20px 0px 0px 0px;

    box-sizing: border-box;
    /* border: 1px solid lightblue; */
    /* @media (max-width: 768px) {
    flex-direction: column; */
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