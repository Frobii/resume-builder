import { useState } from 'react';
import ToggleMenu from './ToggleMenu';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails'
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
        ] 
    })

    const handleInputChange = (name, value, index = null) => {
        setFormData(prevData => {
            if (index !== null) {
                const updatedEducation = [...prevData.education];
                updatedEducation[index] = {
                    ...updatedEducation[index],
                    [name]: value
                };
                return {
                    ...prevData,
                    education: updatedEducation
                };
            } else {
                return {
                    ...prevData,
                    [name]: value
                };
            }
        });
    };

    return (
      <div className="main-container">
        <section className="forms">
            <PersonalDetails
                fullName={formData.fullName}
                email={formData.email}
                phoneNumber={formData.phoneNumber}
                address={formData.address}
                onInputChange={handleInputChange}
            />
            <ToggleMenu title="Education" >
                <EducationDetails
                    formData={formData}
                    onInputChange={handleInputChange}
                    setFormData={setFormData}
                />
            </ToggleMenu>
        </section>
        <section className="resume-container">
            <Resume {...formData} />    
        </section>
      </div>
    )
}