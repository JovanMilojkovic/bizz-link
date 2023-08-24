import React, { useState, useEffect } from "react";

const ContactsPage = () => {
    const [contacts, setContacts] = useState([]);
    const token = localStorage.getItem("jwtToken");

    const fetchContacts = async () => {
        try {
            const response = await fetch(`http://localhost:8080/contacts`, {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setContacts(data);
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Contacts</h1>
            <div className="row justify-content-center">
                {contacts &&
                    contacts.map((contact) => (
                        <div key={contact.id} className="col-md-12 mb-4">
                            <div className="card mx-auto d-flex flex-row">
                                <img
                                    src={`data:image/jpg;base64,${contact.picture}`}
                                    alt="Profile"
                                    className="card-img-top"
                                    style={{ height: 100, width: 100 }}
                                />
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center">
                                        <h5 className="card-title">
                                            {contact.firstname}{" "}
                                            {contact.lastname}
                                        </h5>
                                        <p className="card-text">
                                            Email: {contact.email}
                                        </p>
                                        <div className="d-flex">
                                            <a
                                                href={contact.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-secondary me-2"
                                            >
                                                LinkedIn
                                            </a>
                                            <a
                                                href={contact.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-secondary"
                                            >
                                                Facebook
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ContactsPage;
