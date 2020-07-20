import React from 'react'
import styled from 'styled-components'

const NavItemContainer = styled.div`
    box-sizing: border-box;

    border: 1px solid blue;
`

const ComponentName = styled.p`
    margin: 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    /* border: 1px dotted gray; */
`

const ItemWrapper = styled.div`
    height: 32px;
    display: flex;
    align-items: center;
    /* border: 1px solid dodgerblue; */
`

const SubItemsContiner = styled.div`
    padding: 0px 0px 0px 16px;
    /* border: 1px solid lightcoral; */
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
    /* border: 1px dotted gray; */
`

export default function NavItem() {
    return (
        <NavItemContainer>
            <ComponentName>Component Name</ComponentName>
            <SubItemsContiner>
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