import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import "./css_files/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useGlobalState from "../globalState";

// import jwt_decode from "jwt-decode";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const setLogInFailed = useGlobalState(
        (selector) => selector.setLogInFailed
    );
    const setLogInUserData = useGlobalState(
        (selector) => selector.setLogInUserData
    );
    const setIsLoggedIn = useGlobalState((selector) => selector.setIsLoggedIn);

    const setUserToken = useGlobalState((selector) => selector.setUserToken);

    const userModel = { email, password };

    const routeChange = () => {
        navigate("/api/v1/resetpassword");
    };

    const errorRoute = () => {
        navigate("/api/v1/error");
    };

    function checkEmail() {
        const errorMessage = "It should be a valid email address!";
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        !email.match(mailFormat) && email.length > 0
            ? setEmailError(errorMessage)
            : setEmailError("");
    }
    function checkPassword() {
        const errorMessage =
            " Password should be min 8 characters and includes 1 leter 1 number 1 special character!";
        const passwordFormat =
            /^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        !password.match(passwordFormat) && password.length > 0
            ? setPasswordError(errorMessage)
            : setPasswordError("");
    }

    const handleCLick = async () => {
        let response;
        try {
            response = await fetch(
                `${import.meta.env.VITE_APP_API_URL}/api/v1/auth/login`,
                {
                    method: "POST",
                    body: JSON.stringify(userModel),
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const responseBody = await response.json();
            const token = responseBody.token;
            const username = responseBody.username.toLowerCase();
            setIsLoggedIn(true);
            setLogInUserData(responseBody);
            localStorage.setItem("jwtToken", token);
            localStorage.setItem("username", responseBody.username);
            localStorage.setItem("email", responseBody.email);
            localStorage.setItem("picture", responseBody.picture);
            setUserToken(token);
            navigate(`/dashboard/${username}`);
        } catch (error) {
            setLogInFailed(response.status);
            errorRoute();
            console.log(error);
        }
    };

    function handleKeyPress(e) {
        if (isButtonValid && e.key === "Enter") {
            handleCLick();
        }
    }

    useEffect(() => {
        checkEmail();
        checkPassword();
    }, [email, password]);

    useEffect(() => {
        document.addEventListener("keypress", handleKeyPress);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
    }, []);
    const isButtonValid =
        email.length > 0 &&
        emailError == "" &&
        password.length > 0 &&
        passwordError == "";

    return (
        <>
            <CssVarsProvider>
                <Sheet
                    sx={{
                        width: 300,
                        mx: "auto",
                        my: 4,
                        py: 3,
                        px: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        borderRadius: "sm",
                        boxShadow: "md",
                    }}
                >
                    <div>
                        <Typography
                            level="h4"
                            component="h1"
                            textAlign={"center "}
                        >
                            Welcome!
                        </Typography>
                        <Typography level="body2" textAlign={"center "}>
                            Sign in to continue.
                        </Typography>
                    </div>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            // html input attribute
                            name="email"
                            type="email"
                            placeholder="johndoe@email.com"
                            onChange={(e) => {
                                setEmail(e.target.value);
                                e.preventDefault();
                            }}
                            autoComplete="on"
                        />
                        <span className="mail">{emailError}</span>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Input
                                name="password"
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                onKeyDown={handleKeyPress}
                                autoComplete="off"
                            />
                            <span className="password">{passwordError}</span>
                        </form>
                    </FormControl>
                    <Button
                        sx={{
                            mt: 1,
                            backgroundColor: "black",
                            color: "white",
                        }}
                        onClick={handleCLick}
                        disabled={!isButtonValid}
                    >
                        Log in
                    </Button>
                    <Button
                        sx={{
                            mt: 1,
                            backgroundColor: "black",
                            color: "white",
                        }}
                        onClick={routeChange}
                    >
                        Forgot Password?
                    </Button>
                    <Typography
                        endDecorator={<Link to="/api/v1/signup/">Sign up</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: "center" }}
                    >
                        Don't have an account?
                    </Typography>
                </Sheet>
            </CssVarsProvider>
        </>
    );
}

export default Login;
