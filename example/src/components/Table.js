import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
    /* border: 1px solid green; */
`

const PropTable = styled.table`

    width: 100%;
    height: 200px;
    /* border: 1px solid gold; */
`

const TableRow = styled.div`
    height: 24px;
    border: 1px dotted gray;
`


export default function Table() {
    return (
        <TableContainer>
            <PropTable>
                <TableRow>

                </TableRow>
            </PropTable>
        </TableContainer>
    )
}