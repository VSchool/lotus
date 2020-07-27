import React from "react"
import styled from "styled-components"
import ComponentDocTemplate from '../components/ComponentDocTemplate'

const StatusChipTemplateObj = {
    componentName: 'Status Chip',
    componentDescription: 'Assist in displaying the "state" of the Card component.',
    exampleText: `<StatusChip status={string} />`,
    templateProps: [
        {
            propName: 'status',
            propType: 'String',
            propDescription: 'Sets the "state" of the status chip.',
            options: ['in-progress', 'not-started', 'completed','up-next', 'err']
        }
    ],
    reactComponent: ''
}

const StatusChipContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default () => {
    return (
        <StatusChipContainer>
            <ComponentDocTemplate templateInfo={StatusChipTemplateObj} />
        </StatusChipContainer>
    )
}
