import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const SideNavContainer = styled.div`
    min-width: 240px;
    background: #C4C4C4;
`

export default function SideNav() {
    return (
        <SideNavContainer>
            <NavItem />
        </SideNavContainer>
    )
}