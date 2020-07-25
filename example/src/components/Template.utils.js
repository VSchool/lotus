export function returnComponentObj(name) {
    switch (name) {
        case 'Controls':
            return {
                component: 'Controls',
                componentDescription: 'Stock placholder for description.',
                demoText: `<Controls disabledStatus={Boolean} />`,
                props: [
                    {
                        prop: 'disabledStatus',
                        propType: 'String',
                        propDescription: 'Personalized description for what this prop does for the component.',
                        required: 'yes',
                        values: ['true', 'false']
                    }
                ]
            }
        default: 
            console.log('Default Case Hit')
    }
}