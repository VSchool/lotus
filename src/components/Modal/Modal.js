import React from 'react'
import styled from 'styled-components'

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
    position: static;
    width: 672px;
    height: 320px;
    left: 88px;
    top: 64px;
    flex: none;
    order: 0;
    align-self: center;
    margin: 0px 10px;
    border: 1px solid red;
`

const ContentList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    position: static;
    width: 672px;
    height: 224px;
    right: 0px;
    top: 0px;
    flex: none;
    order: 0;
    align-self: center;
    margin: 0px 40px;
    border: 1px solid dodgerblue;
`

const ContentListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    position: static;
    width: 583px;
    height: 124px;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    align-self: flex-start;
    margin: 0px 16px;
    border: 1px solid green;
`

const ModalTitle = styled.h3`
    position: static;
    width: 583px;
    height: 76px;
    left: 0px;
    top: 0px;
    font-family: Aktiv Grotesk;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    color: #21201F;
    flex: none;
    order: 0;
    align-self: center;
    margin: 0px 24px;
`

const ModalSubtitle = styled.p`
    position: static;
    width: 583px;
    height: 24px;
    left: 0px;
    top: 100px;
    font-family: Aktiv Grotesk Ex;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #456AE2;
    flex: none;
    order: 1;
    align-self: flex-start;
    margin: 0px 24px;
`

const ModalBody = styled.p`
    position: static;
    width: 672px;
    height: 84px;
    left: 0px;
    top: 140px;
    font-family: Aktiv Grotesk;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #514F4B;
    flex: none;
    order: 1;
    align-self: center;
    margin: 0px 16px;
`

const ContentRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;
    position: static;
    width: 510px;
    height: 56px;
    right: 0px;
    top: 264px;
    flex: none;
    order: 1;
    align-self: flex-end;
    margin: 0px 40px;
    border: 1px solid pink;
`

const OutlineButton = styled.button`
    display: flex;
    flex-direction: row;
    padding: 16px 44px;
    position: static;
    width: 189px;
    height: 56px;
    right: 321px;
    top: 0px;
    background: #FBF9F7;
    border: 2px solid #21201F;
    box-sizing: border-box;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
    flex: none;
    order: 0;
    align-self: center;
    margin: 24px 0px;
`

const DefaultButton = styled.button`
    display: flex;
    flex-direction: row;
    padding: 20px 44px;
    position: static;
    width: 297px;
    height: 56px;
    right: 0px;
    top: 0px;
    background: #514F4B;
    border: 2px solid #21201F;
    box-sizing: border-box;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
    flex: none;
    order: 1;
    align-self: center;
    font-family: Aktiv Grotesk Ex;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    /* display: flex; */
    align-items: center;
    text-align: center;
    letter-spacing: 1px;

    color: #FFFFFF;
    margin: 24px 0px;
`



function Modal() {
    return (
        <ModalContainer>
            <ContentContainer>
                <ContentList>
                    <ContentListContainer>
                        <ModalTitle>Are you planning on applying for any V School Scholarships? </ModalTitle>
                        <ModalSubtitle>Complete the  Scholarship Application</ModalSubtitle>
                        <ModalBody>If you are interested in applying for scholarships, make sure to apply. Then we tell them how many people are usually rewarded with something.</ModalBody>
                    </ContentListContainer>
                </ContentList>
                <ContentRow>
                    <OutlineButton>No, Thanks</OutlineButton>
                    <DefaultButton>Apply for Scholarships</DefaultButton>
                </ContentRow>
            </ContentContainer>
        </ModalContainer>
    )
}

export default Modal