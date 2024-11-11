import './multi-form.css';
import { useState } from 'react';
import TextInput from './TextInput';
import Icon from '@mdi/react';
import { mdiPlus, mdiTrashCanOutline, mdiEyeCheck, mdiEyeRemove } from '@mdi/js';

export default function MultiForm({
    formData,
    setFormData,
    preExistingFormData,
    setPreExistingFormData,
    formDataKey,
    fields,
    previewTitle,
    formOpen,
    setFormOpen,
    currentIndex,
    setCurrentIndex
}) {
    const handleInputChange = (name, value, index = null) => {
        setFormData(prevData => {
            if (index !== null) {
                const updatedState = [...prevData[formDataKey]];
                updatedState[index] = {
                    ...updatedState[index],
                    [name]: value
                };
                return {
                    ...prevData,
                    [formDataKey]: updatedState,
                };
            }
        });
    };

    const toggleForm = (index = null) => {
        setFormOpen(!formOpen);
        setCurrentIndex(index);
        //  Duplicate the education object at the time of opening the form
        if (!formOpen && formData[formDataKey][index] !== undefined) {
            const formDataDuplicate = JSON.parse(JSON.stringify(formData[formDataKey][index]));
            setPreExistingFormData(formDataDuplicate);
        }
    }

    const handleDelete = (deleteIndex) => {
        setFormData(prevData => {
            const updatedFormData = prevData[formDataKey].filter((_, index) => index != deleteIndex)
            return {
                ...prevData,
                [formDataKey]: updatedFormData
            }
        })
    }

    const handleCancel = (currentIndex) => {
        if (preExistingFormData) {
            setFormData(prevData => {
                const updatedFormData = [...prevData[formDataKey]];
                updatedFormData[currentIndex] = preExistingFormData;
                return {
                    ...prevData,
                    [formDataKey]: updatedFormData
                }
            })
        }
        else {
            handleDelete(currentIndex)
        }
    }

    const deleteForm = () => {
        handleDelete(currentIndex);
        setFormOpen(false);
        setPreExistingFormData(null);
    }

    const cancelForm = () => {
        handleCancel(currentIndex);
        setPreExistingFormData(null);
        setFormOpen(!formOpen);
    }

    const hideFormItem = (index) => {
        if (formData[formDataKey][index].visible || formData[formDataKey][index].visible === undefined) {
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
                            {formData[formDataKey].map((item, index) => (
                                <div className="preview-controls">
                                    <div
                                        key={index}
                                        className="preview"
                                        onClick={() => toggleForm(index)}
                                    >
                                        <p
                                            className="preview-item"
                                        >
                                            {item[previewTitle]}
                                        </p>
                                    </div>
                                    <button
                                        className='visible-button'
                                        onClick={() => hideFormItem(index)}
                                    >
                                        {
                                            (formData[formDataKey][index].visible || formData[formDataKey][index].visible === undefined) &&
                                            <Icon className='visible-icon' path={mdiEyeCheck} size={1} />
                                        }
                                        {
                                            formData[formDataKey][index].visible === false &&
                                            <Icon className='visible-icon' path={mdiEyeRemove} size={1} />
                                        }
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="toggle-form-button-container">
                            {formData[formDataKey].length < 3 && (
                                <button
                                    className='toggle-form-button'
                                    onClick={() => toggleForm(formData[formDataKey].length)}
                                >
                                    <Icon path={mdiPlus} size={1} />
                                    Add {formDataKey.substring(0, 1).toUpperCase() + formDataKey.substring(1)}
                                </button>
                            )}
                        </div>
                    </>
                }
                {
                    formOpen &&
                    <>
                        {fields.map((field) => (
                            <TextInput
                                key={field.name}
                                label={field.label}
                                name={field.name}
                                value={formData[formDataKey][currentIndex]?.[field.name]}
                                onChange={(event) => handleInputChange(field.name, event.target.value, currentIndex)}
                            />
                        ))}
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
};