import './education-details.css';
import { useState } from 'react';
import ToggleMenu from './ToggleMenu';
import TextInput from './TextInput'


export default function educationDetailsForm() {
    return(
        <>
            <ToggleMenu 
                title="Education"
            >
                <h1>Hello!</h1>
            </ToggleMenu>
        </>
    )
}