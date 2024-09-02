import './toggle-menu.css'
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { mdiChevronUp } from '@mdi/js';
import { mdiSchool } from '@mdi/js';
import { mdiBriefcase } from '@mdi/js';

export default function ToggleMenu({children, title}) {
    const [toggled, setToggled] = useState(false);

    const toggleMenu = () => {
        toggled ? setToggled(false) : setToggled(true)
    }

    return(
        <>
            <div className="toggle-container">
                <div 
                    className="toggle-heading"
                    style = {{
                        borderBottomRightRadius: toggled ? '0rem' : '0.7rem',
                        borderBottomLeftRadius: toggled ? '0rem' : '0.7rem',
                    }}
                >
                    {title === "Education" && <Icon path={mdiSchool} size={1.5} />}
                    {title === "Experience" && <Icon path={mdiBriefcase} size={1.5} />}
                    <h1 className='title'>{title}</h1>
                    <button className='toggle-button' onClick={toggleMenu}>
                        {toggled ? 
                            <Icon path={mdiChevronUp} size={1} /> :
                            <Icon path={mdiChevronDown} size={1} /> 
                        }
                    </button>
                </div>
                {toggled && children}
            </div>
        </>
    )
}