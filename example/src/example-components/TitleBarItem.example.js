import React from 'react'
import styled from 'styled-components'
import { TitlebarItem } from '@vschool/lotus'

const TitlebarItemExmpleContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const SectionName = styled.p`
    margin: 0px 0px 24px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`

const PropDesc = styled.p`
    margin: 16px 0px 8px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
`

export default () => {
    return (
        <TitlebarItemExmpleContainer>
            <SectionName>Examples</SectionName>
            <PropDesc>'status' = active</PropDesc>
            <TitlebarItem status={'active'}  title={'Step 1'} subtitle={'Background'} />
            <PropDesc>'status' = inactive</PropDesc>
            <TitlebarItem status={'inactive'}  title={'Step 2'} subtitle={'Application'}   />
            <PropDesc>'status' = locked</PropDesc>
            <TitlebarItem status={'locked'}  title={'Step 3'} subtitle={'Enrollment'}  />
        </TitlebarItemExmpleContainer>
    )
}