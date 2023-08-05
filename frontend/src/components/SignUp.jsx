import { CssVarsProvider } from "@mui/joy/styles";
import NavBar from "./NavBar";
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
import useGlobalState from "../globalState";

function SignUp() {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userNameError, setUserNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    //TODO "We will need this later for csrf security"
    // const csrfToken = document.cookie.replace(
    //     /(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
    //     "$1"
    // );

    const setSignupFailed = useGlobalState(
        (selector) => selector.setSignupFailed
    );
    const userModel = {
        username: `${username}`,
        email: `${email}`,
        password: `${password}`,
        firstName: null,
        lastName: null,
        linkedin: null,
        facebook: null,
        picture: null,
    };

    const checkUserName = () => {
        const errorMessage =
            "User name should be 5 characters long! and to include 1 special character!";
        const userNameFormat = /^(?=.{5,})(?=.*[a-z])(?=.*[!@#$%^&+=.]).*$/;
        const isUserNameValid = username.match(userNameFormat);
        if (!isUserNameValid && username.length > 0) {
            setUserNameError(errorMessage);
        } else {
            setUserNameError("");
        }
    };

    function checkEmail() {
        const errorMessage = "It should be a valid email address!";
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const isEmailValid = email.match(mailFormat);
        if (!isEmailValid && email.length > 0) {
            setEmailError(errorMessage);
        } else {
            setEmailError("");
        }
    }
    function checkPassword() {
        const errorMessage =
            " Password should be min 8 characters and includes 1 uppercase leter 1 number 1 special character!";
        const passwordFormat =
            /^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const isPasswordValid = password.match(passwordFormat);
        if (!isPasswordValid && password.length > 0) {
            setPasswordError(errorMessage);
        } else {
            setPasswordError("");
        }
    }
    const isButtonValid =
        username.length > 0 &&
        userNameError == "" &&
        email.length > 0 &&
        emailError == "" &&
        password.length > 0 &&
        passwordError == "";

    const handleCLick = async () => {
        const createUser = await fetch(`http://localhost:8080/api/v1/signup`, {
            method: "POST",
            body: JSON.stringify(userModel),
            mode: "cors",
            headers: {
                //TODO need for csrf security
                //"X-XSRF-TOKEN": `${csrfToken}`,
                "Content-Type": "application/json",
            },
        });
        console.log(createUser);

        if (createUser.ok) {
            alert(
                "Profile sucsefuly created 🙂 please check Your Email to confirm account"
            );
            navigate("/api/v1/login/");
        }
        if (!createUser.ok) {
            setSignupFailed(createUser.status);
            navigate("/api/v1/error/");
            return;
        }
    };

    useEffect(() => {
        checkUserName();
        checkEmail();
        checkPassword();
    }, [username, email, password, userNameError, emailError, passwordError]);

    return (
        <>
            <NavBar />
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
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
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
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <span className="password">{passwordError}</span>
                        </form>
                    </FormControl>
                    <Button
                        sx={{
                            mt: 1 /* margin top */,
                            backgroundColor: "black", // Set the background color to black
                            color: "white", // Set the text color to white
                        }}
                        onClick={handleCLick}
                        disabled={!isButtonValid}
                    >
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
        </>
    );
}

export default SignUp;
