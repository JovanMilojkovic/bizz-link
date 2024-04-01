import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const EditUserProfile = () => {
    const navigate = useNavigate();
    const param = useParams();
    const token = localStorage.getItem("jwtToken");
    const email = localStorage.getItem("email");
    // State to hold user data
    const [userData, setUserData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        linkedin: "",
        facebook: "",
        picture: "",
    });

    const fetchData = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/dashboard/edit-user?id=${param.userId}&email=${email}`,
                {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            setUserData({ ...data });
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    };

    const convertBase64 = async (file) =>
        new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            if (file !== undefined) {
                fileReader.readAsDataURL(file);

                fileReader.onload = () => {
                    resolve(fileReader.result);
                };

                fileReader.onerror = (error) => {
                    reject(error);
                };
            } else {
                return;
            }
        });

    const handlePictureUpload = async (event) => {
        const pictureFile = event.target.files[0];
        const base64 = await convertBase64(pictureFile);
        const imageBase64 = base64.split(",")[1];
        setUserData((prevUserData) => ({
            ...prevUserData,
            picture: imageBase64,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("jwtToken");
        const username = localStorage.getItem("username").toLowerCase();

        fetch(
            `${
                import.meta.env.VITE_APP_API_URL
            }/dashboard/edit-user?id=${username}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(userData),
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("User data update failed");
                }
            })
            .then((responseData) => {
                const updatedUsername = responseData.username;
                console.log(updatedUsername);
                const newToken = responseData.token;
                const picture = responseData.picture;
                localStorage.setItem("username", updatedUsername);
                localStorage.setItem("jwtToken", newToken);
                localStorage.setItem("picture", picture);
                navigate(`/dashboard/${updatedUsername}`);
            })
            .catch((error) => {
                console.error("Error updating user data:", error);
            });
    };

    function navigateToDashboard() {
        navigate(`/dashboard/${localStorage.getItem("username")}`);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container mt-4">
                <h2 className="mb-4">Edit User Profile</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <p htmlFor="username" className="form-label">
                            Username:
                        </p>
                        <input
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <p htmlFor="firstName" className="form-label">
                            First Name:
                        </p>
                        <input
                            type="text"
                            name="firstName"
                            value={userData.firstName}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <p htmlFor="lastName" className="form-label">
                            Last Name:
                        </p>
                        <input
                            type="text"
                            name="lastName"
                            value={userData.lastName}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <p htmlFor="linkedin" className="form-label">
                            LinkedIn:
                        </p>
                        <input
                            type="text"
                            name="linkedin"
                            value={userData.linkedin}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <p htmlFor="facebook" className="form-label">
                            Facebook:
                        </p>
                        <input
                            type="text"
                            name="facebook"
                            value={userData.facebook}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <p htmlFor="picture" className="form-label">
                            Upload Picture:
                        </p>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePictureUpload}
                            className="form-control"
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary m-1">
                            Save
                        </button>
                        <button
                            className="btn btn-secondary m-1"
                            onClick={navigateToDashboard}
                        >
                            Back
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditUserProfile;
