import './toggle-menu.css'
import { useState } from 'react';
import Icon from '@mdi/react';
import {
    mdiCardAccountDetails,
    mdiInformationSlabBox,
    mdiSchool,
    mdiBriefcase,
    mdiKeyVariant,
    mdiAccountTie,
    mdiStar,
    mdiChevronUp,
    mdiChevronDown
} from '@mdi/js';

export default function ToggleMenu({ children, title }) {
    const [toggled, setToggled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleMenu = () => {
        setToggled(!toggled)
    }

    const highlightIcon = () => {
        setIsHovered(true);
    };

    const removeHighlight = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div className="toggle-container">
                <div
                    className="toggle-heading"
                    onMouseEnter={highlightIcon}
                    onMouseLeave={removeHighlight}
                >
                    {title === "Personal Details" &&
                        <Icon
                            path={mdiCardAccountDetails} size={1.5}
                            style={{ color: isHovered ? '#1847c7e0' : '#213547' }}
                        />
                    }
                    {title === "Summary" &&
                        <Icon
                            path={mdiInformationSlabBox} size={1.5}
                            style={{ color: isHovered ? '#1847c7e0' : '#213547' }}
                        />
                    }
                    {title === "Education" &&
                        <Icon
                            path={mdiSchool} size={1.5}
                            style={{ color: isHovered ? '#1847c7e0' : '#213547' }}
                        />
                    }
                    {title === "Experience" &&
                        <Icon
                            path={mdiBriefcase} size={1.5}
                            style={{ color: isHovered ? '#1847c7e0' : '#213547' }}
                        />
                    }
                    {title === "Key Skills" &&
                        <Icon
                            path={mdiKeyVariant} size={1.5}
                            style={{ color: isHovered ? '#1847c7e0' : '#213547' }}
                        />
                    }
                    {title === "Career History" &&
                        <Icon
                            path={mdiAccountTie} size={1.5}
                            style={{ color: isHovered ? '#1847c7e0' : '#213547' }}
                        />
                    }
                    {title === "References" &&
                        <Icon
                            path={mdiStar} size={1.5}
                            style={{ color: isHovered ? '#1847c7e0' : '#213547' }}
                        />
                    }
                    <h2 className='title'>{title}</h2>
                    <button
                        className='toggle-button'
                        onClick={toggleMenu}
                        onMouseEnter={highlightIcon}
                    >
                        {toggled ?
                            <Icon path={mdiChevronUp} size={1} /> :
                            <Icon path={mdiChevronDown} size={1} />
                        }
                    </button>
                </div>
                {
                    toggled && children
                }
            </div >
        </>
    )
}