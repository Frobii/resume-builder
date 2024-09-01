import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { mdiChevronUp } from '@mdi/js';

export default function ToggleMenu({children, title}) {
    const [toggled, setToggled] = useState(false);

    const toggleMenu = () => {
        toggled ? setToggled(false) : setToggled(true)
    }

    return(
        <div className="toggle-container">
            <h1>{title}</h1>
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