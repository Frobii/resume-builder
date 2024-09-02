import './personal-details.css';
import TextInput from './TextInput';

export default function personalDetailsForm({ fullName, email, phoneNumber, address, onInputChange }) {
    return(
        <>
            <section className="personal-details-form">
                <h1>Personal Details</h1>
                <TextInput
                    label="Full Name"
                    name="fullName"
                    value={fullName}
                    onChange={(event) => onInputChange("fullName", event.target.value)}
                />
                <TextInput
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(event) => onInputChange("email", event.target.value)}
                />
                <TextInput
                    label="Phone Number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(event) => onInputChange("phoneNumber", event.target.value)}
                />
                <TextInput
                    label="Address"
                    name="address"
                    value={address}
                    onChange={(event) => onInputChange("address", event.target.value)}
                />
            </section>
        </>
    )
}