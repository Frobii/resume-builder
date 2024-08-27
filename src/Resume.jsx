import './resume.css';

export default function Resume({fullName, email, phoneNumber, address}) {
    return (
        <div className="resume">
            <section className="personal-details">
                <p className="full-name">{fullName}</p>
                <p className="email">{email}</p>
                <p className="phone-number">{phoneNumber}</p>
                <p className="address">{address}</p>
            </section>
        </div>
    )
}