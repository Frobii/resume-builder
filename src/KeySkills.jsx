import './multi-form.css';
import { useState } from 'react';
import TextInput from './TextInput';
import Icon from '@mdi/react';
import { mdiPlus, mdiTrashCanOutline, mdiEyeCheck, mdiEyeRemove } from '@mdi/js';

export default function KeySkillsForm({
    formData,
    setFormData,
}) {
    const [formOpen, setFormOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [preExistingSkills, setPreExistingSkills] = useState(null);

    const handleInputChange = (name, value, index = null) => {
        setFormData(prevData => {
            if (index !== null) {
                const updatedSkills = [...prevData.skills]
                updatedSkills[index] = {
                    ...updatedSkills[index],
                    [name]: value
                }
                return {
                    ...prevData,
                    skills: updatedSkills
                };
            }
        });
    };

    const toggleForm = (index = null) => {
        setFormOpen(!formOpen);
        setCurrentIndex(index);
        //  Duplicate the skills object at the time of opening the form
        if (!formOpen && formData.skills[index] !== undefined) {
            const skillsDuplicate = JSON.parse(JSON.stringify(formData.skills[index]));
            setPreExistingSkills(skillsDuplicate);
        }
    }

    const handleDelete = (deleteIndex) => {
        setFormData(prevData => {
            const updatedSkills = prevData.skills.filter((_, index) => index != deleteIndex)
            return {
                ...prevData,
                skills: updatedSkills
            }
        })
    }

    const handleCancel = (currentIndex) => {
        if (preExistingSkills) {
            setFormData(prevData => {
                const updatedSkills = [...prevData.skills];
                updatedSkills[currentIndex] = preExistingSkills;
                return {
                    ...prevData,
                    skills: updatedSkills
                }
            })
        } else {
            handleDelete(currentIndex)
        }
    }

    const deleteForm = () => {
        handleDelete(currentIndex);
        setFormOpen(false);
        setPreExistingSkills(null)
    }

    const cancelForm = () => {
        handleCancel(currentIndex);
        setPreExistingSkills(null);
        setFormOpen(!formOpen);
    }

    const hideSkillsItem = (index) => {
        if (formData.skills[index].visible || formData.skills[index].visible === undefined) {
            handleInputChange("visible", false, index)
        } else {
            handleInputChange("visible", true, index)
        }
    }

    return (
        <>
            <section className="multi-form">
                {
                    !formOpen &&
                    <>
                        <div className="preview-container">
                            {formData.skills.map((item, index) => (
                                <div className="preview-controls">
                                    <div
                                        key={index}
                                        className="preview"
                                        onClick={() => toggleForm(index)}
                                    >
                                        <p
                                            className="preview-item"
                                        >
                                            {item.skill}
                                        </p>
                                    </div>
                                    <button
                                        className='visible-button'
                                        onClick={() => hideSkillsItem(index)}
                                    >
                                        {
                                            (formData.skills[index].visible || formData.skills[index].visible === undefined) &&
                                            <Icon className='visible-icon' path={mdiEyeCheck} size={1} />
                                        }
                                        {
                                            formData.skills[index].visible === false &&
                                            <Icon className='visible-icon' path={mdiEyeRemove} size={1} />
                                        }
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="toggle-form-button-container">
                            {formData.skills.length < 3 && (
                                <button
                                    className='toggle-form-button'
                                    onClick={() => toggleForm(formData.skills.length)}
                                >
                                    <Icon path={mdiPlus} size={1} />
                                    Add Skill
                                </button>
                            )}
                        </div>
                    </>
                }
                {
                    formOpen &&
                    <>
                        <TextInput
                            label="Skill"
                            name="institution"
                            value={formData.skills[currentIndex]?.skill}
                            onChange={(event) => handleInputChange("skill", event.target.value, currentIndex)}
                        />
                        <div className="form-buttons-container">
                            <button
                                className='form-button trash-button'
                                onClick={deleteForm}
                            >
                                <Icon className='trash-icon' path={mdiTrashCanOutline} size={0.8} />
                            </button>
                            <button
                                className='form-button'
                                onClick={cancelForm}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={toggleForm} // The form is already saved on input
                                className='form-button save-button'
                            >
                                Save
                            </button>
                        </div>
                    </>
                }
            </section>
        </>
    )
}