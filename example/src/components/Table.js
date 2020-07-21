import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
    border: 1px solid green;
`

const PropTable = styled.table`

    width: 100%;
    height: 200px;
    /* border: 1px solid gold; */
`

const TBody = styled.tbody`
    border: 1px dotted gray;
`

const TableRow = styled.tr`
    height: 24px;
    border: 1px dotted gray;
`

const TableHead = styled.th`

    border: 1px dotted lightcoral;
`

const TableData = styled.td`
    border: 1px dotted blue;
`


export default function Table() {
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
                    </TableRow>
                </TBody>
            </PropTable>
        </TableContainer>
    )
}