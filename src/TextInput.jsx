import './text-input.css';


export default function TextInput({ label, name, value, onChange}) {
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