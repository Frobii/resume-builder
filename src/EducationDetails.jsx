import './multi-form.css';
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
        { label: "Institution", name: "institution" },
        { label: "Qualification", name: "degree" },
        { label: "Completion Date", name: "completionDate" },
    ]

    const formDataKey = 'education';
    const previewTitle = 'institution';

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