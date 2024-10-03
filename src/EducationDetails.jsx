import './education-details.css';
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
    // console.log(preExistingEducation)
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
            <section className="education-details-form">
                {
                    !formOpen &&
                    <>
                        <div className="education-preview-container">
                            {formData.education.map((item, index) => (
                                <div className="education-preview-controls">
                                    <div 
                                        key={index}
                                        className="education-preview" 
                                        onClick={() => toggleForm(index)}
                                    >
                                        <p  
                                            className="education-item"
                                        >
                                            {item.school}
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
                            label="School"
                            name="school"
                            value={formData.education[currentIndex]?.school}
                            onChange={(event) => onInputChange("school", event.target.value, currentIndex )}
                        />
                        <TextInput
                            label="Degree"
                            name="degree"
                            value={formData.education[currentIndex]?.degree}
                            onChange={(event) => onInputChange("degree", event.target.value, currentIndex )}
                        />
                        <TextInput
                            label="Start Date"
                            name="startDate"
                            value={formData.education[currentIndex]?.startDate}
                            onChange={(event) => onInputChange("startDate", event.target.value, currentIndex )}
                        />
                        <TextInput
                            label="End Date"
                            name="endDate"
                            value={formData.education[currentIndex]?.endDate}
                            onChange={(event) => onInputChange("endDate", event.target.value, currentIndex )}
                        />
                        <TextInput
                            label="Location"
                            name="location"
                            value={formData.education[currentIndex]?.location}
                            onChange={(event) => onInputChange("location", event.target.value, currentIndex)}
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