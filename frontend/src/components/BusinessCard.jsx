import React, { useState, useEffect, useRef } from 'react';
import QRCode from "react-qr-code";
import "./css_files/BusinessCard.css"; // Make sure to include your own CSS as well
import { useParams } from 'react-router';

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

    useEffect(() => { 
        fetch(`http://localhost:8080/business-card?username=${param.username}`)
        .then(response => response.json())
        .then(user => {
            console.log(user);
            setUserData(user);
            profilePicRef.current.src = `data:image/jpg;base64,${user.picture}`;
        });
    }, []);

    return (
        <div className="container my-4">
            <div className="card business-card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img style={{height:50, width:50}} ref={profilePicRef} alt="Profile" className="img-fluid rounded-circle profile-pic" />
                        </div>
                        <div className="col-md-8">
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
                        <QRCode style={{height:50, width:50}} value={userData.email} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
