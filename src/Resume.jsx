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
                                {summary.split('\n').map((line, index) => ( // Split the summary upon line breaks
                                    <p key={index}>{line}</p>
                                ))}
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
                                            <div className="title-and-company">
                                                <div className="career-title">{item.title}</div>
                                                <div className="company">&nbsp;~&nbsp;{item.company}</div>
                                                &nbsp;
                                                (
                                                <div className="startYear">{item.startYear}</div>
                                                &nbsp;-&nbsp;
                                                <div className="endYear">{item.endYear}</div>
                                                )
                                            </div>
                                            <ul className="duties">
                                                <li>{item.duty1}</li>
                                                <li>{item.duty2}</li>
                                                <li>{item.duty3}</li>
                                            </ul>
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
                                            <div className="reference-name-and-company">
                                                <div className="reference-name">{item.name}</div>
                                                &nbsp;-&nbsp;
                                                <div className="reference-company">{item.company}</div>
                                            </div>
                                            <ul className="reference-contact-details">
                                                <li className="reference-phone-number">
                                                    Contact number:&nbsp;{item.contactNumber}</li>
                                                <li className="reference-email">{item.email}</li>
                                            </ul>
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