import './multi-form.css';
import { useState } from 'react';
import MultiForm from './MultiForm'

export default function KeySkillsForm({
    formData,
    setFormData,
}) {

    const [formOpen, setFormOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [preExistingSkills, setPreExistingSkills] = useState(null);

    const fields = [
        { label: "Skill", name: "skill" }
    ]
    const formDataKey = 'skills';
    const previewTitle = 'skill';

    return (
        <>
            <MultiForm
                formData={formData}
                setFormData={setFormData}
                preExistingFormData={preExistingSkills}
                setPreExistingFormData={setPreExistingSkills}
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