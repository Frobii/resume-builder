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
                    <div className ="education-header">Education & Training</div>
                    {   (education[0] && (education[0].visible || education[0].visible === undefined)) && 
                        <div className="education-1">
                            <div className="institution">{education[0].institution}</div>
                            <div className="degree">{education[0].degree}</div>
                            <div className="completionDate">{education[0].completionDate}</div>
                        </div>
                    }
                    {   (education[1] && (education[1].visible || education[1].visible === undefined)) && 
                        <div className="education-2">
                            <div className="institution">{education[1].institution}</div>
                            <div className="degree">{education[1].degree}</div>
                            <div className="completionDate">{education[1].completionDate}</div>
                        </div>
                    }
                    {   (education[2] && (education[2].visible || education[2].visible === undefined)) && 
                        <div className="education-3">
                            <div className="institution">{education[2].institution}</div>
                            <div className="degree">{education[2].degree}</div>
                            <div className="completionDate">{education[2].completionDate}</div>
                        </div>
                    }
                </section>
            }       
        </div>
    )
}