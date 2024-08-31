import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails'
import Resume from './Resume';
import './resume-builder.css';

export default function ResumeBuilder() {
    const [formData, setFormData] = useState({
      fullName: "Jenson Jackal",
      email: "contactjj@gmail.com",
      phoneNumber: "0420 440 360",
      address: "14 Jackal Street, Mt Jackal"
    })
  
    const handleInputChange = (name, value) => {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  
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
            <EducationDetails

            />
        </section>
        <section className="resume-container">
            <Resume {...formData} />    
        </section>
      </div>
    )
}