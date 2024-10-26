import './multi-form.css';
import { useState } from 'react';
import TextInput from './TextInput';
import Icon from '@mdi/react';
import { mdiPlus, mdiTrashCanOutline, mdiEyeCheck, mdiEyeRemove } from '@mdi/js';

export default function EducationForm({
    onInputChange,
    formData,
    setFormData,
}) {
    const [formOpen, setFormOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [preExistingEducation, setPreExistingEducation] = useState(null);

    const toggleForm = (index = null) => {
        setFormOpen(!formOpen);
        setCurrentIndex(index);
//      Duplicate the education object at the time of opening the form
        if (!formOpen && formData.education[index] !== undefined) {
            const educationDuplicate = JSON.parse(JSON.stringify(formData.education[index]));
            setPreExistingEducation(educationDuplicate);
        }
    }

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
        }
      })
    } else {
        handleDelete(currentIndex)
    }
  }

    const deleteForm = () => {
        handleDelete(currentIndex);
        setFormOpen(false);
        setPreExistingEducation(null)
    }

    const cancelForm = () => {
        handleCancel(currentIndex);
        setPreExistingEducation(null);
        setFormOpen(!formOpen);
    }

    const hideEducationItem = (index) => {
        if (formData.education[index].visible ||formData.education[index].visible === undefined) {
            onInputChange("visible", false, index)
        } else {
            onInputChange("visible", true, index)
        }
    }

    return(
        <>
            <section className="multi-form">
                {
                    !formOpen &&
                    <>
                        <div className="preview-container">
                            {formData.education.map((item, index) => (
                                <div className="preview-controls">
                                    <div 
                                        key={index}
                                        className="preview" 
                                        onClick={() => toggleForm(index)}
                                    >
                                        <p  
                                            className="preview-item"
                                        >
                                            {item.institution}
                                        </p>
                                    </div>
                                    <button
                                        className='visible-button'
                                        onClick={() => hideEducationItem(index)}
                                    >
                                        {
                                            (formData.education[index].visible || formData.education[index].visible === undefined) &&
                                            <Icon className='visible-icon' path={mdiEyeCheck} size={1} />
                                        }
                                        {
                                            formData.education[index].visible === false &&
                                            <Icon className='visible-icon' path={mdiEyeRemove} size={1} />
                                        }
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="toggle-form-button-container">
                            {formData.education.length < 3 && (
                                <button
                                    className='toggle-form-button'
                                    onClick={() => toggleForm(formData.education.length)}
                                >
                                    <Icon path={mdiPlus} size={1} />
                                    Add Education
                                </button>
                            )}
                        </div>
                    </>
                }
                {
                    formOpen &&
                    <>
                        <TextInput
                            label="Institution"
                            name="institution"
                            value={formData.education[currentIndex]?.institution}
                            onChange={(event) => onInputChange("institution", event.target.value, currentIndex )}
                        />
                        <TextInput
                            label="Degree"
                            name="degree"
                            value={formData.education[currentIndex]?.degree}
                            onChange={(event) => onInputChange("degree", event.target.value, currentIndex )}
                        />
                        <TextInput
                            label="Completion Date"
                            name="completionDate"
                            value={formData.education[currentIndex]?.completionDate}
                            onChange={(event) => onInputChange("completionDate", event.target.value, currentIndex )}
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