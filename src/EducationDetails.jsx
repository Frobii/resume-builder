import './education-details.css';
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { mdiChevronUp } from '@mdi/js';

function ToggleMenu({children}) {
    const [toggled, setToggled] = useState(false);

    const toggleMenu = () => {
        toggled ? setToggled(false) : setToggled(true)
    }

    return(
        <div className="toggle-container">
            <h1>Education</h1>
            <button onClick={toggleMenu}>
                {toggled ? 
                    <Icon path={mdiChevronUp} size={1} /> :
                    <Icon path={mdiChevronDown} size={1} /> 
                }
            </button>
            {toggled && children}
        </div>
    )
}

export default function educationDetailsForm() {
    return(
        <>
            <ToggleMenu>
                <h1>Hello!</h1>
            </ToggleMenu>
        </>
    )
}