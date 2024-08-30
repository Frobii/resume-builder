import './resume.css';

export default function Resume({fullName, email, phoneNumber, address}) {
    return (
        <div className="resume">
            <section className="personal-details">
                <div className="full-name">{fullName}</div>
                <div className="contact-info">
                    <div className="email">{email}</div>
                    <div className="phone-number">{phoneNumber}</div>
                    <div className="address">{address}</div>
                </div>
            </section>
        </div>
    )
}