import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import Resume from './Resume';
import './resume-builder.css';

export default function ResumeBuilder() {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: ""
    })
  
    const handleInputChange = (name, value) => {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  
    return (
      <div className="main-container">
        <PersonalDetails
          fullName={formData.fullName}
          email={formData.email}
          phoneNumber={formData.phoneNumber}
          address={formData.address}
          onInputChange={handleInputChange}
        />
        <Resume {...formData} />
      </div>
    )
}