import React from 'react';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';/
// import {InstagramIcon} from '@material-ui/icons';
import { Instagram, Facebook ,LinkedIn,Twitter} from '@material-ui/icons';
function Icons(){
    return <div className="flex-container">
        < Instagram className="icons" id="Instagram" />
        < Facebook className="icons"  id="Facebook"/>
        < LinkedIn className="icons"  id="LinkedIn"/>
        < Twitter className="icons"   id="Twitter"/>
    </div>
}

export default Icons;