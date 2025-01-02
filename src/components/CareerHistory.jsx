import '../styles/multi-form.css';
import { useState } from 'react';
import MultiForm from './MultiForm'

export default function EducationForm({
    formData,
    setFormData,
}) {
    const [formOpen, setFormOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [preExistingHistory, setPreExistingHistory] = useState(null);

    const fields = [
        { label: "Title", name: "title" },
        { label: "Company", name: "company" },
        { label: "Start Year", name: "startYear" },
        { label: "End Year", name: "endYear" },
        { label: "Duty 1", name: "duty1" },
        { label: "Duty 2", name: "duty2" },
        { label: "Duty 3", name: "duty3" },
    ]

    const formDataKey = 'careerHistory';
    const previewTitle = 'company';

    return (
        <>
            <MultiForm
                formData={formData}
                setFormData={setFormData}
                preExistingFormData={preExistingHistory}
                setPreExistingFormData={setPreExistingHistory}
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