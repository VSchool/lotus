import React from 'react'
import styled from 'styled-components'
import { decideInfo } from './Main.utils'

const TableContainer = styled.div`
    border: 1px solid green;
`

const PropTable = styled.table`

    width: 100%;
    /* height: 200px; */
    /* border: 1px solid gold; */
`

const TBody = styled.tbody`
    border: 1px dotted gray;
`

const TableRow = styled.tr`
    height: 12px;
    /* background: orange; */
`

const TableHead = styled.th`
    border: 1px dotted lightcoral;
`

const TableData = styled.td`
    text-align: center;
    border: 1px dotted blue;
`

// function displayDescription(input) {
//     console.log(input.description)
// }


export default function Table(props) {
    // console.log(decideInfo(props.component))
    // console.log(props)
    let componentDetails = decideInfo(props.component)

    

    

    console.log(componentDetails.description)
    return (
        <TableContainer>
            <PropTable>
                <TBody>
                    <TableRow>
                        <TableHead>prop</TableHead>
                        <TableHead>description</TableHead>
                    </TableRow>
                    <TableRow>
                        <TableData>'success'</TableData>
                        <TableData>means something to someone</TableData>
                    </TableRow>
                </TBody>
            </PropTable>
        </TableContainer>
    )
}