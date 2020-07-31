import React from "react"
import styled from "styled-components"
import { Button } from "../Button"
import * as colors from "../../colors"

const ModalContainer = styled.div`
    position: relative;
    padding: 32px 24px 8px 24px;
    max-width: 384px;
    /* height: 536px; */
    background: #FBF9F7;
    border: 2px solid #D8D4CF;
    box-sizing: border-box;
    box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);

    /* @media (max-width: 768px) {
        max-width: 376px;
        padding: 32px 24px 32px 24px;
    } */
`

const ContentWrapper = styled.div`
    /* border: 1px solid lightcoral; */
`

const FirstLineText = styled.h4`
    margin: 0px 0px 24px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    color: #21201F;
    box-sizing: border-box;

    /* border: 1px dotted gray; */
`


const SecondLineText = styled.p`
    margin: 0px 0px 16px 0px;
    font-family: aktiv-grotesk-extended;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #456AE2;
    /* border: 1px dotted gray; */
`

const ThirdLineText = styled.p`
    margin: 0px 0px 40px 0px;
    font-family: aktiv-grotesk;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #514F4B;
    /* border: 1px dotted gray; */
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid dodgerblue; */
`

const StyledVSButton = styled(Button)`
    margin: 0px 0px 24px 0px;
    width: 323px;
`


function Modal(props) {
    const { firstLine, secondLine, thirdLine } = props
    console.log(firstLine, secondLine, thirdLine)
    return (
        <ModalContainer>
            <ContentWrapper>
                <FirstLineText>{firstLine}</FirstLineText>
                <SecondLineText>{secondLine}</SecondLineText>
                <ThirdLineText>{thirdLine}</ThirdLineText>
                <ButtonWrapper>
                    <StyledVSButton buttonStyle={'primary-light'} buttonSize={'lg'}>Button</StyledVSButton>
                    <StyledVSButton buttonStyle={'primary-dark'} buttonSize={'lg'}>Button</StyledVSButton>
                </ButtonWrapper>
            </ContentWrapper>
        </ModalContainer>
    )
}

export default Modal
