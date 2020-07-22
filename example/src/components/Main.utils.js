

export function decideInfo(name) {
    switch (name) {
        case 'Header':
            return {
                compName: 'Header',
                description: 'Long form description for the Header component.',
                availableProps: []
            }
        case 'Modal':
            return {
                compName: 'Modal',
                description: 'Long form description for the Modal component.',
                availableProps: [
                    {
                        propName: `'title'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for title.'
                    },
                    {
                        propName: `'subtitle'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for subtitle.'
                    },
                    {
                        propName: `'body'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for body.'
                    }
                ]
            }
        case 'Status Message':
            return {
                compName: 'Status Message',
                description: 'Long form description for the Status Message component.',
                availableProps: [
                    {
                        propName: `'neutral'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for neutral.'
                    },
                    {
                        propName: `'success'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for success.'
                    },
                    {
                        propName: `'warning'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for warning.'
                    },
                    {
                        propName: `'fail'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for fail.'
                    }
                ]
            }
        case 'Card':
            return {
                compName: 'Card',
                description: 'Long form description for the Card component.',
                availableProps: [
                    {
                        propName: `'not-started'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for not-started.'
                    },
                    {
                        propName: `'up-next'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for up-next.'
                    },
                    {
                        propName: `'in-progress'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for in-progress.'
                    },
                    {
                        propName: `'completed'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for completed.'
                    }
                ]
            }
        case 'Controls':
            return {
                compName: 'Controls',
                description: 'Long form description for the Controls component.',
                availableProps: [
                    {
                        propName: `'disabled-status'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for not-started.'
                    }
                ]
            }
        default: 
        return {
            compName: 'Default Case',
            description: 'Nothing to report.'
        }
    }
}

