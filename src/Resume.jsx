import './resume.css';
import Icon from '@mdi/react';
import { mdiEmail } from "@mdi/js";
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

export default function Resume({ fullName, email, phoneNumber, address, education, skills, summary, careerHistory, references }) {
    return (
        <div className="resume">
            <section className="personal-details">
                <h2 className="full-name"> 
                    {fullName}
                </h2>
                <div className="contact-info">
                    {email && <Icon path={mdiEmail} size={1} />}
                    <div className="email">{email}</div>
                    {phoneNumber && <Icon path={mdiPhone} size={1} />}
                    <div className="phone-number">{phoneNumber}</div>
                    {address && <Icon path={mdiMapMarker} size={1} />}
                    <div className="address">{address}</div>
                </div>
            </section>
            <div className="resume-body">
                <div className="resume-body-left">
                {
                    skills.length > 0 &&
                    <section className="key-skills">
                        <h2 className="resume-heading">Key Skills</h2>
                        {skills.map((skill, index) => 
                            (skill.visible || skill.visible === undefined) && (
                                <div key={index} className={'skill'}>
                                    {skill.skill}
                                </div>
                            )
                        )}
                    </section>
                }
                {
                    education.length > 0 && (
                        <section className="education-details">
                            <h2 className="resume-heading">Education & Training</h2>
                            {education.map((item, index) => 
                                (item.visible || item.visible === undefined) && (
                                    <div key={index} className="education-item">
                                        <div className="institution">{item.institution}</div>
                                        <div className="degree">{item.degree}</div>
                                        <div className="completionDate">{item.completionDate}</div>
                                    </div>
                                )
                            )}
                        </section>
                    )
                }
                </div>
                <div className="resume-body-right">
                    {
                        summary &&
                        <section className="summary">
                            <h2 className="resume-heading">
                                Personal Summary
                            </h2>
                            <div className="summary-content">
                                {summary}
                            </div>
                        </section>
                    }
                    {
                        careerHistory.length > 0 && (
                            <section className="career-history">
                                <h2 className="resume-heading">Career History</h2>
                                {careerHistory.map((item, index) => 
                                    (item.visible || item.visible === undefined) && (
                                        <div key={index} className={`careerHistory-${index + 1}`}>
                                            <div className="career-title">{item.title}</div>
                                            <div className="company">{item.company}</div>
                                            <div className="startYear">{item.startYear}</div>
                                            <div className="endYear">{item.endYear}</div>
                                            <div className="duty1">{item.duty1}</div>
                                            <div className="duty2">{item.duty2}</div>
                                            <div className="duty3">{item.duty3}</div>
                                        </div>
                                    )
                                )}
                            </section>
                        )
                    }
                    {
                        references.length > 0 && (
                            <section className="reference-details">
                                <h2 className="resume-heading">References</h2>
                                {references.map((item, index) => 
                                    (item.visible || item.visible === undefined) && (
                                        <div key={index} className={`reference-${index + 1}`}>
                                            <div className="reference-name">{item.name}</div>
                                            <div className="reference-company">{item.company}</div>
                                            <div className="reference-phone-number">{item.contactNumber}</div>
                                            <div className="reference-email">{item.email}</div>
                                        </div>
                                    )
                                )}
                            </section>
                        )
                    }
                </div>
            </div>
        </div>
    )
}