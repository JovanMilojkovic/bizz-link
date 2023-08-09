import { useState, useEffect, useRef } from 'react';
import QRCode from "react-qr-code";
import "./css_files/BusinessCard.css";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

const BusinessCard = () => {
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        phoneNumber: '',
        email: '',
        linkedin: '',
        facebook: '',
        picture: '',
    });
    const param = useParams();
    const profilePicRef = useRef(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("jwtToken");
    const username = localStorage.getItem("username").toLowerCase();

    useEffect(() => { 
        fetch(`http://localhost:8080/business-card?username=${param.username}`)
        .then(response => response.json())
        .then(user => {
            setUserData(user);
            profilePicRef.current.src = `data:image/jpg;base64,${user.picture}`;
        });
    }, []);

    const handleAddButton = (event) => {
        event.preventDefault();
        try {
            fetch("http://localhost:8080/contacts/add-contact", {
                method: "POST",
                body: JSON.stringify(userData),
                mode: "cors",
                headers: {
                    //TODO at the end we need this
                    // "X-XSRF-TOKEN": csrfToken,
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.ok) {
                  console.log('Contact added successfully');
                  return response.json(); 
                } else {
                  console.log('Failed to add contact');
                  throw new Error('Failed to add contact');
                }
              })
            navigate(`/dashboard/${username}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container my-4 d-flex justify-content-center">
            <div className="card business-card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img style={{height:50, width:50}} ref={profilePicRef} alt="Profile" className="img-fluid rounded-circle profile-pic" />
                            <h2 className="card-title">{`${userData.firstname} ${userData.lastname}`}</h2>
                            <p className="card-text">Phone: {userData.phoneNumber}</p>
                            <p className="card-text">Email: {userData.email}</p>
                            <div className="links">
                                <a href={userData.linkedin} target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                                <a href={userData.facebook} target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        <div className="d-flex flex-column align-items-center">
                            <QRCode style={{height:50, width:50}} value={userData.email} />
                            <button className="btn btn-primary mt-3" onClick={(event) => handleAddButton(event)} style={{ backgroundColor: "black", border:"black" }}>Add to Contacts</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
