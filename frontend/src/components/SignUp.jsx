import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/css_files/SignUp.css";
import { useState } from "react";
import { useEffect } from "react";

function SignUp(props) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const [userNameError, setUserNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const userModel = {
        name: `${userName}`,
        email: `${email}`,
        password: `${password}`,
    };

    // const checkUnoccupied = async (e) => {
    //     if (e.target.type === "text") {
    //         const userName = e.target.value;
    //         setUserName(userName);
    //         const res = await fetch(`/api/search/?userName=${userName}`);
    //         if (res.ok) {
    //             const respondMessage = await res.text();
    //             setUserNameError(respondMessage);
    //         }
    //     }
    //     if (e.target.type === "email") {
    //         const userEmail = e.target.value;
    //         setEmail(userEmail);
    //         const res = await fetch(`/api/search/?userEmail=${userEmail}`);
    //         if (res.ok) {
    //             const respondMessage = await res.text();
    //             setEmailError(respondMessage);
    //         }
    //     }
    // };

    const checkUserName = () => {
        const errorMessage =
            "User name should be 5 characters long! and to include 1 special character!";
        const userNameFormat = /^(?=.{5,})(?=.*[a-z])(?=.*[!@#$%^&+=.]).*$/;
        const isUserNameValid = userName.match(userNameFormat);
        if (!Array.isArray(isUserNameValid) && userName.length > 4) {
            setUserNameError(errorMessage);
        } else {
            setUserNameError("");
        }
    };

    function checkEmail() {
        const errorMessage = "It should be a valid email address!";
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const isEmailValid = email.match(mailFormat);
        if (!Array.isArray(isEmailValid) && email.length > 0) {
            setEmailError(errorMessage);
        } else {
            setEmailError("");
        }
    }
    function checkPassword() {
        const errorMessage =
            " Password should be min 8-10 characters and includes 1 uppercase leter 1 number 1 special character!";
        const passwordFormat =
            /^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const isPasswordValid = password.match(passwordFormat);
        if (!Array.isArray(isPasswordValid) && password.length > 7) {
            setPasswordError(errorMessage);
        } else {
            setPasswordError("");
        }
    }

    const handleCLick = async () => {
        let responseStatus;
        const createUser = await fetch(`http://localhost:8080/api/v1/addUser`, {
            method: "POST",
            body: JSON.stringify(userModel),
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res);
        //props.response(createUser);
        if (createUser.ok) {
            alert(
                "Profile sucsefuly created 🙂 please check Your Email to confirm account"
            );
            navigate("/api/v1/login/");
        }
        if (!createUser.ok) {
            setError(true);
            return;
        }
    };

    useEffect(() => {
        checkUserName();
        checkEmail();
        checkPassword();

        if (error) {
            navigate("/api/error/");
        }
    }, [error, userName, email, password]);

    return (
        <CssVarsProvider>
            <Sheet
                sx={{
                    width: 300,
                    mx: "auto", // margin left & right
                    my: 4, // margin top & botom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    borderRadius: "sm",
                    boxShadow: "md",
                }}
            >
                <FormControl>
                    <FormLabel>User name</FormLabel>
                    <Input
                        // html input attribute
                        name="userName"
                        type="text"
                        placeholder="JohnDoe123"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <span className="userSpan" style={{ color: "red" }}>
                        {userNameError}
                    </span>
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        // html input attribute
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                        autoComplete="on"
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="mail">{emailError}</span>
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <form>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            autoComplete="on"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="password">{passwordError}</span>
                    </form>
                </FormControl>
                <Button sx={{ mt: 1 /* margin top */ }} onClick={handleCLick}>
                    Sign up
                </Button>
                <Typography
                    endDecorator={<Link to="/api/v1/login/">Login</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: "center" }}
                >
                    Already have an account?
                </Typography>
            </Sheet>
        </CssVarsProvider>
    );
}

export default SignUp;
