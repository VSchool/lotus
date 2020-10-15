import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { black, gray, green } from "../../colors"
import { ReactComponent as Checkmark } from "../../assets/icons/circle_check.svg"
import "../../lotus.scss"

const ItemContainer = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 10px 18px;
    background-color: ${black};
    color: ${gray.base};
    opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
    cursor: ${(props) => (props.isDisabled ? "not-allowed" : "initial")};

    ${(props) => {
        if (props.isCurrent) {
            return css`
                border: 4px solid ${green.lighter};
                padding-top: 6px !important;
            `
        }
    }}

    @media only screen and (min-width: 800px) {
        padding: 10px 88px;
        padding-right: 18px;
    }
`

const StepNumber = styled.h6`
    color: ${gray.lighter};
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
`

const Title = styled.p`
    font-size: 10px;
    line-height: 13px;
    color: ${gray.lighter};
    font-family: "aktiv-grotesk-extended";
    font-weight: 700;
    letter-spacing: 1px;
    display: flex;

    @media only screen and (min-width: 800px) {
        font-size: 14px;
        line-height: 16px;
    }

    & > span {
        margin-right: 8px;
    }
`

const StyledCheckmark = styled(Checkmark)`
    height: 14px;
    width: 14px;
    & > path {
        fill: ${green.base};
    }
`

function TitlebarItem({ children, index, stepName, activeIndex }) {
    const isCurrent = index === activeIndex
    const isCompleted = index < activeIndex
    const isDisabled = index > activeIndex
    return (
        <ItemContainer isCurrent={isCurrent} isCompleted={isCompleted} isDisabled={isDisabled}>
            <StepNumber>
                {stepName} {index + 1}
            </StepNumber>
            <Title>
                {isCompleted && (
                    <span>
                        <StyledCheckmark />
                    </span>
                )}
                {children}
            </Title>
        </ItemContainer>
    )
}

export default TitlebarItem

TitlebarItem.propTypes = {
    /**
    If you don't want to use "Step" as the indicator, you can specify an alternative.
     */
    stepName: PropTypes.string,
}

TitlebarItem.defaultProps = {
    stepName: "Step",
}
