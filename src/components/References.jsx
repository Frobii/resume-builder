import '../styles/multi-form.css';
import { useState } from 'react';
import MultiForm from './MultiForm'

export default function EducationForm({
    formData,
    setFormData,
}) {
    const [formOpen, setFormOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [preExistingEducation, setPreExistingEducation] = useState(null);

    const fields = [
        { label: "Name", name: "name" },
        { label: "Company", name: "company" },
        { label: "Phone Number", name: "contactNumber" },
        { label: "Email Address", name: "email" },
    ]

    const formDataKey = 'references';
    const previewTitle = 'name';

    return (
        <>
            <MultiForm
                formData={formData}
                setFormData={setFormData}
                preExistingFormData={preExistingEducation}
                setPreExistingFormData={setPreExistingEducation}
                formDataKey={formDataKey}
                fields={fields}
                previewTitle={previewTitle}
                formOpen={formOpen}
                setFormOpen={setFormOpen}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </>
    )
}