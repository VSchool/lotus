import React from "react"
import styled from "styled-components"
import { Profile } from "@vschool/lotus"

const ProfileExampleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const SectionName = styled.p`
    margin: 0px 0px 24px 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const user = {
    name: "Namey Namerson",
    email: "emailaddress@woah.com",
    phone: "###-###-####",
    course: "Full-Stack Javascript",
    time: "Full - Time"
}

export default () => {
    return (
        <ProfileExampleContainer>
            <SectionName>Examples</SectionName>
            <Profile
                userName={user.name}
                userEmail={user.email}
                userPhone={user.phone}
                userCourse={user.course}
                userTime={user.time}
            />
        </ProfileExampleContainer>
    )
}
