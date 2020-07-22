

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
        case 'Footer':
            return {
                compName: 'Footer',
                description: 'Long form description for the Footer component.',
                availableProps: []
            }
        case 'Profile':
            return {
                compName: 'Profile',
                description: 'Long form description for the Profile component.',
                availableProps: [
                    {
                        propName: `'userName'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for userName.'
                    },
                    {
                        propName: `'userEmail'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for userEmail.'
                    },
                    {
                        propName: `'userPhone'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for userPhone.'
                    },
                    {
                        propName: `'userCourse'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for userCourse.'
                    },
                    {
                        propName: `'userTime'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for userTime.'
                    }
                ]
            }
        case 'StatusChip':
            return {
                compName: 'StatusChip',
                description: 'Long form description for the StatusChip component.',
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
                    },
                    {
                        propName: `'up-next'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for up-next.'
                    },
                    {
                        propName: `'err'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for err.'
                    }
                ]
            }
        case 'Taskbar':
            return {
                compName: 'Taskbar',
                description: 'Long form description for the Taskbar component.',
                availableProps: [
                    {
                        propName: `'title'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for title.'
                    },
                    {
                        propName: `'task'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for task.'
                    }
                ]
            }
        case 'TitlebarItem':
            return {
                compName: 'TitlebarItem',
                description: 'Long form description for the TitlebarItem component.',
                availableProps: [
                    {
                        propName: `'title'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for title.'
                    },
                    {
                        propName: `'task'`,
                        propType: 'string',
                        propDescription: 'Some sort of descrtiption for task.'
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

