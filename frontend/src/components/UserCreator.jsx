import NavBar from "./NavBar";

const createAppUser = async (appUser) => {
    return await fetch("http://localhost:8080/saveUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appUser),
    }).then((res) => res.json());
  };
  
  const UserCreator = () => {
    const onSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      const appUser = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
      };
  
      console.log(appUser);
  
      try {
        await createAppUser(appUser);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <>  
            <NavBar/>
            <form className="appUserForm" onSubmit={onSubmit}>
                <div className="firstName">
                <label htmlFor="firstName">First Name: </label>
                <input name="firstName"></input>
                </div>
                <div className="lastName">
                <label htmlFor="lastName">Last Name: </label>
                <input name="lastName"></input>
                </div>
                <button>Submit!</button>
            </form>
      </>
    );
  };
  
  export default UserCreator;
  
  