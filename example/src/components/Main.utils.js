export function decideInfo(name) {
    switch (name) {
        case 'Header':
            return {
                compName: 'Header',
                description: 'Walk the plank poop deck ahoy hulk shrouds reef. Dead men tell no tales crack Jennys tea cup swing the lead booty haul wind strike colors. Rutters hands crack Jennys tea cup fluke bounty man-of-war. Jury mast clipper mutiny gally matey scuttle. Lad long boat jib line quarterdeck draft.Pinnace loaded to the gunwalls gally jib fore hands. Stern run a shot across the bow coffer ahoy walk the plank league. Knave pink matey barque tender cog. To go on account handsomely black spot bilge jack topsail. Pieces of Eight Sink me belay red ensign hardtack rutters.',
            }
        case 'Modal':
            return {
                compName: 'Modal',
                description: 'Scallywag gunwalls line black spot bilge rat smartly handsomely clap of thunder crimp Letter of Marque. Quarterdeck Privateer Nelsons folly sloop bilge Sink me lass sutler Spanish Main dance the hempen jig. Chantey aft Letter of Marque Sink me knave spike yard swing the lead cable hands.',
            }
        case 'StatusMessage':
            return {
                compName: 'Status Message',
                description: 'Long ass description This is for the Status Message',
            }
        case 'Card':
            return {
                compName: 'Card',
                description: 'Long clothes Letter of Marque barque sheet swab tender jury mast main sheet jolly boat fathom. Aye barque to go on account interloper chantey scallywag warp tackle lad Admiral of the Black. Starboard clipper spike galleon come about American Main provost code of conduct strike colors gangway.',
            }
        default: 
        return {
            compName: 'Default Case',
            description: 'Nothing to report.'
        }
    }
}