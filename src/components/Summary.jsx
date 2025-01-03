import '../styles/summary.css';
import TextInput from './TextInput';

export default function summaryForm({ formData, setFormData }) {

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
            <section className="summary-form">
                <TextInput
                    label="Describe yourself"
                    name="summary"
                    value={formData.summary}
                    onChange={(event) => handleInputChange("summary", event.target.value)}
                    multiLine={true}
                />
            </section>
        </>
    )
}