import '../styles/personal-details.css';
import TextInput from './TextInput';

export default function personalDetailsForm({ formData, setFormData }) {

    const handleInputChange = (name, value) => {
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            };
        });
    };

    return (
        <>
            <section className="personal-details-form">
                <TextInput
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(event) => handleInputChange("fullName", event.target.value)}
                />
                <TextInput
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={(event) => handleInputChange("email", event.target.value)}
                />
                <TextInput
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(event) => handleInputChange("phoneNumber", event.target.value)}
                />
                <TextInput
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={(event) => handleInputChange("address", event.target.value)}
                />
            </section>
        </>
    )
}