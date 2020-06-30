import React, { Fragment } from 'react'
import styled from 'styled-components'

const ComponentTitle = styled.h3`
    margin: 0px;
    max-width: 344px;
    /* border: 1px solid lightcoral; */
    /* color: blue; */
`

const ComponentDesc = styled.p`
    margin: 0px;
    max-width: 344px;
    margin: 24px 0px 0px 0px;
    /* border: 1px solid lightgreen; */

`

const PropsTableContainer = styled.table`
    margin: 32px 0px 0px 0px;
    max-width: 344px;
    caption-side: top;
    border-collapse: collapse;

    tr {
        height: 32px;
    }

    th {
        text-align: left;
        border-bottom: 0.5px solid gray;
        padding: 0px 0px 0px 8px;
    }

    tbody > tr {
        background: white;
    }

    td {
        vertical-align: top;
        border-bottom: 0.5px solid lightgrey;
        padding: 8px 8px 8px 8px;

    }
`

function PropsTable() {
    return (
        <Fragment>
            <ComponentTitle>Status Chip</ComponentTitle>
            <ComponentDesc>The Chip component graphically displays the status of the card.</ComponentDesc>
            <PropsTableContainer>
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Description</th>
                        <th>type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>status</td> 
                    <td>Could use a really good description here.</td> 
                    <td>string</td>
                    </tr>
                    <tr>
                    <td>err</td> 
                    <td>And another description for this prop.</td> 
                    <td>string</td>
                    </tr>
                </tbody>
            </PropsTableContainer>
        </Fragment>
    )
}

export default PropsTable