import React from 'react'
import styled from 'styled-components'

import { TitlebarItem } from '../TitlebarItem'

const TitlebarContainer = styled.div`
    position: relative;
    width: 414px;
    height: 48px;
    display: flex;

    @media (min-width: 768px) {
        min-width: 1200px;
    }
`

function Titlebar({stepOne, stepTwo, stepThree}) {
    
    return (
        <TitlebarContainer>
            <TitlebarItem status={stepOne} title={'Step 1'}  subtitle={'Background'} />
            <TitlebarItem status={stepTwo} title={'Step 2'}  subtitle={'Application'} />
            <TitlebarItem status={stepThree} title={'Step 3'}  subtitle={'Enrollment'} />
        </TitlebarContainer>
    )
}

export default Titlebar