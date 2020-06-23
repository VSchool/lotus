import React from 'react'
import styled from 'styled-components'

const ProfileContainer = styled.div`
    border: 1px solid lightcoral;
`

const ProfileText = styled.p`
    color: blue;
`

function Profile() {
    return (
        <ProfileContainer>
            <ProfileText>Hello World</ProfileText>
        </ProfileContainer>
    )
}

export default Profile