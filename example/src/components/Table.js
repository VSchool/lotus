import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.table`
    width: 100%;
    background: #F0EEEB;
    text-align: left;
    padding: 8px 0px 8px 0px;

    & > tbody {

        & > tr {
            color: #514F4B;
            font-family: 'aktiv-grotesk';

            & > td {
                /* font-family: 'aktiv-grotesk'; */
                /* background: blue; */
            }
        }
    }
`

function Table(props) {

    window.onload = init
    function init() {
        props.data.templateProps.forEach((availableProp) => {
            let oddHead = document.getElementById('tbody')
            let newTR = document.createElement('tr')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            let td4 = document.createElement('td')
    
            let td1Text = document.createTextNode(availableProp.propName)
            let td2Text = document.createTextNode(availableProp.propType)
            let td3Text = document.createTextNode(availableProp.options)
            let td4Text = document.createTextNode(availableProp.propDescription)

            td1.appendChild(td1Text)
            td2.appendChild(td2Text)
            td3.appendChild(td3Text)
            td4.appendChild(td4Text)

            newTR.appendChild(td1)
            newTR.appendChild(td2)
            newTR.appendChild(td3)
            newTR.appendChild(td4)
            oddHead.appendChild(newTR)
        })
    }

    return (
            <TableContainer>
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Options</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody id={'tbody'}>
                </tbody>
            </TableContainer>
    )
}

export default Table