import { useState } from 'react';
import ToggleMenu from './ToggleMenu';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails'
import KeySkills from './KeySkills';
import Summary from './Summary';
import CareerHistory from './CareerHistory';
import References from './References';
import ExportButtons from './ExportButtons';
import Resume from './Resume';
import '../styles/resume-builder.css';

export default function ResumeBuilder() {
    const [formData, setFormData] = useState({
        fullName: "Charlie Day",
        email: "pepeSilva@mail.com",
        phoneNumber: "(929) 556-2746",
        address: "544 Mateo Street",
        education: [
            {
                institution: "St. Joe's Prep School",
                degree: 'High School',
                completionDate: 'Graduated in ...',
                visible: true,
            },
            {
                institution: "Bird Law Academy",
                degree: 'Doctorate in Bird Law',
                completionDate: 'Graduated in 2004',
                visible: true,
            },
            {
                institution: "Mac's Fight Camp",
                degree: 'Black Belt in Swordplay',
                completionDate: 'Trained hard in 2006',
                visible: true,
            },
            {
                institution: "The Genius Institute",
                degree: 'Doctor of Genius',
                completionDate: 'Graduated in 2009',
                visible: true,
            },
            {
                institution: "Frank's Business Academy",
                degree: 'International Studies',
                completionDate: 'Graduated in 2012',
                visible: true,
            }
        ],
        skills: [
            {
                skill: "Charlie Jobs",
                visible: true,
            },
            {
                skill: "Illeteracy",
                visible: true,
            },
            {
                skill: "Songs",
                visible: true,
            },
            {
                skill: "Cat Food",
                visible: true,
            },
            {
                skill: "Paint",
                visible: true,
            },
        ],
        summary: "Wildcard, get things done—no matter what, or how gross.\n" +
            "Loyal, tough, and always ready to jump into whatever!",
        careerHistory: [
            {
                title: "Bartender",
                company: "Paddy's Pub",
                startYear: "2005",
                endYear: "Present",
                duty1: "Charlie Jobs",
                duty2: "Drinkin'",
                duty3: "Helping Frank",
            },
            {
                title: "Mailroom Clerk",
                company: "The Temp Agency",
                startYear: "2008",
                endYear: "2012",
                duty1: "Sorting and Delivering Mail",
                duty2: "Connecting Dots",
                duty3: "Documenting a grand conspiracy",
            }
        ],
        references: [
            {
                name: "Dennis Reynolds",
                company: "Paddy's Pub",
                contactNumber: "(215) 555-0134",
                email: "dennisreynolds@hotmale.com",
                visible: true,
            },
            {
                name: "Bird Woman",
                company: "Paddy's Pub",
                contactNumber: "1-800-BIRD-LUV",
                email: "deereynolds@squawk.com",
                visible: true,
            },
            {
                name: "Ronald McDonald",
                company: "Paddy's Pub",
                contactNumber: "(215) 867-5309",
                email: "mac@fightmilk.biz",
                visible: true,
            },
        ],
    });

    return (
        <div className="main-container">
            <section className="forms">
                <div className="heading-container">
                    <h1>Resume Builder</h1>
                    <ExportButtons></ExportButtons>
                </div>
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
                <ToggleMenu title="Key Skills">
                    <KeySkills
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
                <ToggleMenu title="Career History">
                    <CareerHistory
                        formData={formData}
                        setFormData={setFormData}
                    />
                </ToggleMenu>
                <ToggleMenu title="References">
                    <References
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