import { useState } from 'react';
import NavBar from './NavBar';

const EditUserProfile = () => {
  // State to hold user data
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    linkedin: '',
    facebook: '',
    picture: null,
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  // Handle picture upload
  const handlePictureUpload = (event) => {
    const pictureFile = event.target.files[0];
    setUserData((prevUserData) => ({
      ...prevUserData,
      picture: pictureFile,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform the fetch/save operation here
    // You can send the user data to the server using an API endpoint
    // For this example, let's just log the data to the console
    console.log('User Data:', userData);
    // Reset the form after successful submission (optional)
    setUserData({
      firstName: '',
      lastName: '',
      linkedin: '',
      facebook: '',
      picture: null,
    });
  };

  return (
    <>
    <NavBar/>
    <div className="container mt-4">
      <h2 className="mb-4">Edit User Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name:</label>
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
          <label htmlFor="lastName" className="form-label">Last Name:</label>
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
          <label htmlFor="linkedin" className="form-label">LinkedIn:</label>
          <input
            type="text"
            name="linkedin"
            value={userData.linkedin}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="facebook" className="form-label">Facebook:</label>
          <input
            type="text"
            name="facebook"
            value={userData.facebook}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="picture" className="form-label">Upload Picture:</label>
          <input type="file" accept="image/*" onChange={handlePictureUpload} className="form-control" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default EditUserProfile;
