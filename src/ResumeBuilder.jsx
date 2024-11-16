import { useState } from 'react';
import ToggleMenu from './ToggleMenu';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails'
import KeySkills from './KeySkills';
import Summary from './Summary';
import CareerHistory from './CareerHistory'
import Resume from './Resume';
import './resume-builder.css';

export default function ResumeBuilder() {
    const [formData, setFormData] = useState({
        fullName: "Charlie Day",
        email: "pepeSilva@mail.com",
        phoneNumber: "(929) 556-2746",
        address: "544 Mateo Street",
        education: [
            {
                institution: `St. Joe's Prep School`,
                degree: 'High School Diploma',
                completionDate: 'Certified in 2000',
                visible: true,
            }
        ],
        skills: [
            {
                skill: `Charlie Jobs`,
                visible: true,
            }
        ],
        summary: "Wildcard, get things done—no matter what, or how gross. Loyal, tough, and always ready to jump into whatever!",
        careerHistory: [
            {
                title: "Bartender",
                company: "Paddy's Pub",
                startYear: "2005",
                endYear: "Present",
                duty1: "Charlie Jobs",
                duty2: "Drinkin",
                duty3: "Helping Frank",
            }
        ]
    })

    return (
        <div className="main-container">
            <section className="forms">
                <ToggleMenu title="Personal Details">
                    <PersonalDetails
                        formData={formData}
                        setFormData={setFormData}
                    />
                </ToggleMenu>
                <ToggleMenu title="Summary">
                    <Summary
                        formData={formData}
                        setFormData={setFormData}
                    />
                </ToggleMenu>
                <ToggleMenu title="Education" >
                    <EducationDetails
                        formData={formData}
                        setFormData={setFormData}
                    />
                </ToggleMenu>
                <ToggleMenu title="Key Skills">
                    <KeySkills
                        formData={formData}
                        setFormData={setFormData}
                    />
                </ToggleMenu>
                <ToggleMenu title="Career History">
                    <CareerHistory
                        formData={formData}
                        setFormData={setFormData}
                    />
                </ToggleMenu>
            </section>
            <section className="resume-container">
                <Resume {...formData} />
            </section>
        </div >
    )
}