import React from "react"
import styled, { css } from "styled-components"
import { setStatus } from "./utils"
import PropTypes from "prop-types"
import * as colors from "../../colors"
import "../../lotus.scss"

const BannerContainer = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;

    ${(props) => {
        const { textBorder, textBackground, iconColor } = setStatus(props.status)
        return css`
            & > span {
                background-color: ${iconColor};
            }

            & > div {
                background-color: ${textBackground};
                border: 2px solid ${textBorder};
            }
        `
    }}
`

const Icon = styled.span`
    width: 56px;
    min-height: 56px;
    color: ${colors.white};
    font-family: "aktiv-grotesk";
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
`

function Banner({ children, status, ...rest }) {
    const { iconText } = setStatus(status)
    return (
        <BannerContainer {...rest} status={status}>
            <Icon>{iconText}</Icon>
            <TextContainer>
                <p>{children}</p>
            </TextContainer>
        </BannerContainer>
    )
}

Banner.propTypes = {
    status: PropTypes.oneOf(["neutral", "success", "warning", "error"]).isRequired,
    children: PropTypes.string.isRequired,
}

Banner.defaultProps = {
    status: "neutral",
}

export default Banner
