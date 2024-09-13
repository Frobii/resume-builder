import './resume.css';
import Icon from '@mdi/react';
import { mdiEmail } from "@mdi/js";
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

export default function Resume({fullName, email, phoneNumber, address, education}) {
    return (
        <div className="resume">
            <section className="personal-details">
                <div className="full-name">
                    {fullName}
                </div>
                <div className="contact-info">
                    {email && <Icon path={mdiEmail} size={1} />}
                    <div className="email">{email}</div>
                    {phoneNumber && <Icon path={mdiPhone} size={1} />}
                    <div className="phone-number">{phoneNumber}</div>
                    {address && <Icon path={mdiMapMarker} size={1} />}
                    <div className="address">{address}</div>
                </div>
            </section>
            {
                education.length > 0 &&
                <section className="education-details">
                    {   (education[0] && education[0].visible) && 
                        <div className="education-1">
                            <div className="school">{education[0].school}</div>
                            <div className="degree">{education[0].degree}</div>
                            <div className="startDate">{education[0].startDate}</div>
                            <div className="endDate">{education[0].endDate}</div>
                            <div className="location">{education[0].location}</div>
                        </div>
                    }
                    {   (education[1] && education[1].visible) && 
                        <div className="education-2">
                            <div className="school">{education[1].school}</div>
                            <div className="degree">{education[1].degree}</div>
                            <div className="startDate">{education[1].startDate}</div>
                            <div className="endDate">{education[1].endDate}</div>
                            <div className="location">{education[1].location}</div>
                        </div>
                    }
                    {   (education[2] && education[2].visible) && 
                        <div className="education-3">
                            <div className="school">{education[2].school}</div>
                            <div className="degree">{education[2].degree}</div>
                            <div className="startDate">{education[2].startDate}</div>
                            <div className="endDate">{education[2].endDate}</div>
                            <div className="location">{education[2].location}</div>
                        </div>
                    }
                </section>
            }       
        </div>
    )
}