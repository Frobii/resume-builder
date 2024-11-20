import './resume.css';
import Icon from '@mdi/react';
import { mdiEmail } from "@mdi/js";
import { mdiPhone } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

export default function Resume({ fullName, email, phoneNumber, address, education, skills, summary, careerHistory, references }) {
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
                    <div className="education-heading">Education & Training</div>
                    {(education[0] && (education[0].visible || education[0].visible === undefined)) &&
                        <div className="education-1">
                            <div className="institution">{education[0].institution}</div>
                            <div className="degree">{education[0].degree}</div>
                            <div className="completionDate">{education[0].completionDate}</div>
                        </div>
                    }
                    {(education[1] && (education[1].visible || education[1].visible === undefined)) &&
                        <div className="education-2">
                            <div className="institution">{education[1].institution}</div>
                            <div className="degree">{education[1].degree}</div>
                            <div className="completionDate">{education[1].completionDate}</div>
                        </div>
                    }
                    {(education[2] && (education[2].visible || education[2].visible === undefined)) &&
                        <div className="education-3">
                            <div className="institution">{education[2].institution}</div>
                            <div className="degree">{education[2].degree}</div>
                            <div className="completionDate">{education[2].completionDate}</div>
                        </div>
                    }
                </section>
            }
            {
                skills.length > 0 &&
                <section className="key-skills">
                    <div className="skills-heading">Key Skills</div>
                    {(skills[0] && (skills[0].visible || skills[0].visible === undefined)) &&
                        <div className="skill-1">
                            {skills[0].skill}
                        </div>
                    }
                    {(skills[1] && (skills[1].visible || skills[1].visible === undefined)) &&
                        <div className="skill-2">
                            {skills[1].skill}
                        </div>
                    }
                    {(skills[2] && (skills[2].visible || skills[2].visible === undefined)) &&
                        <div className="skill-3">
                            {skills[2].skill}
                        </div>
                    }
                </section>
            }
            {
                summary &&
                <section className="summary">
                    <div className="summary-heading">
                        Personal Summary
                    </div>
                    <div className="summary-content">
                        {summary}
                    </div>
                </section>
            }
            {
                careerHistory.length > 0 &&
                <section className="career-history">
                    <div className="history-heading">
                        Career History
                    </div>
                    {(careerHistory[0] && (careerHistory[0].visible || careerHistory[0].visible === undefined)) &&
                        <div className="careerHistory-1">
                            <div className="career-title">{careerHistory[0].title}</div>
                            <div className="company">{careerHistory[0].company}</div>
                            <div className="startYear">{careerHistory[0].startYear}</div>
                            <div className="endYear">{careerHistory[0].endYear}</div>
                            <div className="duty1">{careerHistory[0].duty1}</div>
                            <div className="duty2">{careerHistory[0].duty2}</div>
                            <div className="duty3">{careerHistory[0].duty3}</div>
                        </div>
                    }
                    {(careerHistory[1] && (careerHistory[1].visible || careerHistory[1].visible === undefined)) &&
                        <div className="careerHistory-2">
                            <div className="career-title">{careerHistory[1].title}</div>
                            <div className="company">{careerHistory[1].company}</div>
                            <div className="startYear">{careerHistory[1].startYear}</div>
                            <div className="endYear">{careerHistory[1].endYear}</div>
                            <div className="duty1">{careerHistory[1].duty1}</div>
                            <div className="duty2">{careerHistory[1].duty2}</div>
                            <div className="duty3">{careerHistory[1].duty3}</div>
                        </div>
                    }
                    {(careerHistory[2] && (careerHistory[2].visible || careerHistory[2].visible === undefined)) &&
                        <div className="careerHistory-3">
                            <div className="career-title">{careerHistory[2].title}</div>
                            <div className="company">{careerHistory[2].company}</div>
                            <div className="startYear">{careerHistory[2].startYear}</div>
                            <div className="endYear">{careerHistory[2].endYear}</div>
                            <div className="duty1">{careerHistory[2].duty1}</div>
                            <div className="duty2">{careerHistory[2].duty2}</div>
                            <div className="duty3">{careerHistory[2].duty3}</div>
                        </div>
                    }
                </section>
            }
            {
                references.length > 0 &&
                <section className="reference-details">
                    <div className="reference-heading">References</div>
                    {(references[0] && (references[0].visible || references[0].visible === undefined)) &&
                        <div className="reference-1">
                            <div className="reference-name">{references[0].name}</div>
                            <div className="reference-company">{references[0].company}</div>
                            <div className="reference-phone-number">{references[0].phoneNumber}</div>
                            <div className="reference-email">{references[0].email}</div>
                        </div>
                    }
                    {(references[1] && (references[1].visible || references[1].visible === undefined)) &&
                        <div className="reference-2">
                            <div className="reference-name">{references[1].name}</div>
                            <div className="reference-company">{references[1].company}</div>
                            <div className="reference-phone-number">{references[1].phoneNumber}</div>
                            <div className="reference-email">{references[1].email}</div>
                        </div>
                    }
                    {(references[2] && (references[2].visible || references[2].visible === undefined)) &&
                        <div className="reference-3">
                            <div className="reference-name">{references[2].name}</div>
                            <div className="reference-company">{references[2].company}</div>
                            <div className="reference-phone-number">{references[2].phoneNumber}</div>
                            <div className="reference-email">{references[2].email}</div>
                        </div>
                    }
                </section>
            }
        </div>
    )
}