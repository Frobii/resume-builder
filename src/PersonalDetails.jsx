import './personal-details.css';

function TextInput({ label, name, value, onChange}) {
    return (
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            <input
                className='text-input'
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

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