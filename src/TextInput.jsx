import './text-input.css';

export default function TextInput({ label, name, value, onChange, multiLine = false }) {
    return (
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            {
                multiLine ? (
                    <textarea
                        className='text-area'
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        rows={4}
                    ></textarea>
                ) : (
                    <input
                        className='text-input'
                        type="text"
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                )
            }
        </div>
    )
}