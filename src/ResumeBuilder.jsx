import { useState } from 'react';
import ToggleMenu from './ToggleMenu';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails'
import Resume from './Resume';
import './resume-builder.css';

export default function ResumeBuilder() {
    const [formData, setFormData] = useState({
        fullName: "Jenson Jackal",
        email: "contactjj@gmail.com",
        phoneNumber: "0420 440 360",
        address: "14 Jackal Street, Mt Jackal",
        education: [
            {
                school: 'Jenkal High School',
                degree: '',
                startDate: '',
                endDate: '',
                location: '',
                visible: true,
            }
        ] 
    })

    const [preExistingEducation, setPreExistingEducation] = useState(null);

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

    const handleDelete = (deleteIndex) => {
        setFormData(prevData => {
            const updatedEducation = prevData.education.filter((_, index) => index != deleteIndex)
            return {
                ...prevData,
                education: updatedEducation
            }
        })
    }

    const handleCancel = (currentIndex) => {
        if (preExistingEducation) {
          setFormData(prevData => {
            const updatedEducation = [...prevData.education];
            updatedEducation[currentIndex] = preExistingEducation;
            return {
              ...prevData,
              education: updatedEducation
            };
          });
        } else {
            handleDelete(currentIndex)
        }
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
                    handleCancel={handleCancel}
                    onInputChange={handleInputChange}
                    handleDelete={handleDelete}
                    preExistingEduca1tion={preExistingEducation}
                    setPreExistingEducation={setPreExistingEducation}  
                />
            </ToggleMenu>
        </section>
        <section className="resume-container">
            <Resume {...formData} />    
        </section>
      </div>
    )
}