import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { setStatus } from './utils'
import { blue } from '../../colors/blue'
import { black, white } from '../../colors/gray'

const StatusMesssageContainer = styled.div`
    position: relative;
    width: 378px;
    height: 128px;
    display: flex;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14);

    @media (min-width: 768px) {
        min-width: 1200px;
        max-height: 56px;
    }
`

const IndicatorContainer = styled.div`
    min-width: 56px;
    height: 100%;
    padding: 49px 19px 50px 19px;
    background: ${props => props.background};
    border: ${props => props.border};
    box-sizing: border-box;

    @media (min-width: 768px) {
        height: 56px;
        padding: 13px 19px 14px 19px;
    }
`

const IndicagtorText = styled.p`
    margin: 0px;
    display: flex;
    justify-content: center;
    width: 18px;
    height: 29px;
    font-family: 'benton-sans';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: ${white};
`

const ContentContainer = styled.div`
    background: ${props => props.background};
    border: ${props => props.border};
    display: flex;
    align-items: center;
    /* Used Flex instead of padding for top and bottom */
    padding: 0px 24px 0px 16px;
    border-left: none;
    box-sizing: border-box;

    @media (min-width: 768px) {
        min-width: 100%;
    }
`

const ContentText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${black};
`

function StatusMessage({status, message}) {
    
    const { indicatorColor, 
            indicatorBorder, 
            contentBackground, 
            contentBorder, 
            indicatorText } = setStatus(status)

    return (
        <StatusMesssageContainer>
            <IndicatorContainer background={indicatorColor} border={indicatorBorder}>
                <IndicagtorText>{indicatorText}</IndicagtorText>
            </IndicatorContainer>
            <ContentContainer background={contentBackground} border={contentBorder}>
                <ContentText>{message}</ContentText>
            </ContentContainer>
        </StatusMesssageContainer>
    )
}

StatusMessage.propTypes = {
    status: PropTypes.string.isRequired,
    message: PropTypes.string
  }

export default StatusMessage