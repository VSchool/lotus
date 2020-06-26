import React from 'react'
import styled from 'styled-components'

import { blue } from '../../colors/blue'
import { gray, black } from '../../colors/gray'

const ProfileContainer = styled.div`
    position: relative;
    max-width: 416px;
    height: 379px;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14);
    background: ${gray.lighter};
`
const MyInfoContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 32px 32px 0px 20px;
`

const ContentHeader = styled.h5`
    width: 100%;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${black};
    margin: 0px 0px 4px 0px;
    box-sizing: border-box;
`

const ContentParagraph = styled.p`
    margin: 0px;
    width: 100%;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: ${gray.darker};
    box-sizing: border-box;
`

const TextButton = styled.button`
    width: 120px;
    margin: 10px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: right;
    color: ${blue.base};
    border: none;
    background: none;
`

function Profile({userName, userEmail, userPhone, userCourse, userTime}) {
    return (
        <ProfileContainer>
            <MyInfoContainer>
                <ContentHeader>My Info</ContentHeader>
                <ContentParagraph>{userName}</ContentParagraph>
                <ContentParagraph>{userEmail}</ContentParagraph>
                <ContentParagraph>{userPhone}</ContentParagraph>
            </MyInfoContainer>
            <MyInfoContainer>
                <ContentHeader>Selected Course</ContentHeader>
                <ContentParagraph>{userCourse}</ContentParagraph>
            </MyInfoContainer>
            <MyInfoContainer>
                <ContentHeader>Time Commitment</ContentHeader>
                <ContentParagraph>{userTime}</ContentParagraph>
                <TextButton>Log Out</TextButton>
            </MyInfoContainer>
        </ProfileContainer>
    )
}

export default Profile