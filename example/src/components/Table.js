import React from 'react'
import styled from 'styled-components'
import { decideInfo } from './Main.utils'

const TableContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
`

const Caption = styled.p`
    margin: 0px 0px 0px 0px;
    padding: 8px 0px;
    width: 100%;
    font-family: 'aktiv-grotesk';
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    background: #514F4B;
    color: #FBF9F7;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-sizing: border-box;
`

const TableRow = styled.div`
    margin: 8px 0px 8px 0px;
    display: flex;

    p:nth-child(1) {
        min-width: 104px;
    }

    p:nth-child(2) {
        min-width: 80px;
    }

    p:nth-child(3) {
        width: 100%;
    }

    
`

const TableHeader = styled.p`
    margin: 0px 0px 0px 0px;
    padding: 8px 0px 8px 8px;
    text-transform: uppercase;
    background: #D8D4CF;
    color: #514F4B;;
    /* border: 1px dotted green; */
`

const TableData = styled.p`
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 8px;
    /* border: 1px dotted green; */

`


export default function Table(props) {
    let componentDetails = decideInfo(props.component)
    const { availableProps } = componentDetails

    let tableRows = availableProps.map((propObj, idx) => {
        const { propName, propType, propDescription } = propObj
        return (
            <TableRow key={idx}>
                <TableData>{propName}</TableData>
                <TableData>{propType}</TableData>
                <TableData>{propDescription}</TableData>
            </TableRow>
        )
    })

    return (
        <TableContainer>
            <Caption>Props Information</Caption>
            <TableRow>
                <TableHeader>prop</TableHeader>
                <TableHeader>type</TableHeader>
                <TableHeader>description</TableHeader>
            </TableRow>
            {tableRows}
        </TableContainer>
    )
}

// :nth-of-type(odd) {
//     background-color: #efefef;
// }
// :hover {
//     background-color: lightpink;
// }