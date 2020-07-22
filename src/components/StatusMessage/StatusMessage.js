import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

// import { setStatus } from './utils'
// import { blue } from '../../colors/blue'
// import { black, white } from '../../colors/gray'

const StatusMessageContainer = styled.div`
    position: relative;
    width: 378px;
    height: 128px;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14);
`

export default function StatusMessage() {
    return (
        <StatusMessageContainer>
            helo
        </StatusMessageContainer>
    )
}

// StatusMessage.propTypes = {
//     status: PropTypes.string.isRequired,
//     message: PropTypes.string
//   }

