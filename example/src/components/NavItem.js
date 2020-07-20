import React, { useState } from 'react'
import styled from 'styled-components'

const NavItemContainer = styled.div`
    box-sizing: border-box;
`

const ComponentName = styled.p`
    margin: 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
`

const ItemWrapper = styled.div`
    height: 32px;
    display: flex;
    align-items: center;
`

const SubItemsContiner = styled.div`
    display: ${props => props.display};
    padding: 0px 0px 0px 16px;
`

const SubItemHighlightBar = styled.div`
    width: 2px;
    height: 24px;
    background: #7F9EEE;
`

const SubItemName = styled.p`
    margin: 0px 0px 0px 8px;
    width: 100%;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    color: #000000;
`

export default function NavItem(props) {

    const [isItemOpen, setIsItemOpen] = useState('none')

    const openListItem = () => {
        if (isItemOpen ===  'none') {
            setIsItemOpen('block')
        } else if (isItemOpen ===  'block') {
            setIsItemOpen('none')
        }
    }

    return (
        <NavItemContainer>
            <ComponentName onClick={openListItem}>Component Name</ComponentName>
            <SubItemsContiner display={isItemOpen}>
                <ItemWrapper>
                    <SubItemHighlightBar />
                    <SubItemName>Overview</SubItemName>
                </ItemWrapper>
                <ItemWrapper>
                    <SubItemHighlightBar />
                    <SubItemName>Props</SubItemName>
                </ItemWrapper>
                <ItemWrapper>
                    <SubItemHighlightBar />
                    <SubItemName>Examples</SubItemName>
                </ItemWrapper>
            </SubItemsContiner>
        </NavItemContainer>
    )
}