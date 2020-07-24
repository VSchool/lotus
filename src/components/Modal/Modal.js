import React from "react"
import styled from "styled-components"

import { Button } from "../Button"
import * as colors from '../../colors'

const ModalContainer = styled.div`
    padding: 64px 88px;
    position: relative;
    max-width: 848px;
    background: ${colors.gray.lighter};
    border: 2px solid ${colors.gray.base};
    box-sizing: border-box;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12),
        0px 12px 17px rgba(0, 0, 0, 0.14);

    @media (max-width: 768px) {
        max-width: 376px;
        padding: 32px 24px 32px 24px;
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 672px;
    margin: 0px 0px 0px 0px;
`

const ModalHeadline = styled.h3`
    max-width: 584px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    color: ${colors.black};
    margin: 0px 0px 0px 0px;

    @media (max-width: 768px) {
        margin: 0px 0px 12px 0px;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
    }
`

const ModalSubtitle = styled.h4`
    max-width: 584px;
    font-family: "aktiv-grotesk-extended";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${colors.blue.base};
    margin: 24px 0px 0px 0px;

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
        margin: 12px 0px 8px 0px;
    }
`

const ModalBody = styled.p`
    max-width: 672px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.gray.darker};
    margin: 16px 0px 0px 0px;

    @media (max-width: 768px) {
        margin: 8px 0px 20px 0px;
    }
`

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;
    max-width: 510px;
    align-self: flex-end;
    margin: 40px 0px 0px 0px;

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 20px 0px 0px 0px;
    }
`

const DeclineButton = styled(Button)`
    width: 184px;
    height: 56px;
    margin: 0px 12px 0px 0px;
    color: ${colors.black};
    background: ${colors.white};

    @media (max-width: 768px) {
        min-width: 320px;
        height: 48px;
        margin: 0px 0px 12px 0px;
    }
`

const ApplyButton = styled(Button)`
    width: 296px;
    height: 56px;
    margin: 0px 0px 0px 12px;

    @media (max-width: 768px) {
        min-width: 320px;
        height: 48px;
        margin: 24px 0px 0px 0px;
    }
`

function Modal({ title, subtitle, body }) {
    return (
        <div>
            <ModalContainer>
                <ContentContainer>
                    <ModalHeadline>{title}</ModalHeadline>
                    <ModalSubtitle>{subtitle}</ModalSubtitle>
                    <ModalBody>{body}</ModalBody>
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
