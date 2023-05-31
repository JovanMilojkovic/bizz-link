import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./css_files/LogIn.css";
import { useState } from "react";

function ResetPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const resetPassword = async () => {
        const response = await fetch("/api/reset/", {
            method: "POST",
            body: JSON.stringify({ email }),
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res);
        if (response.ok) {
            alert("Reset email was sent,please check inbox to reset password");
            navigate("/api/v1/login/");
        } else {
            alert("Something get wrong,please check Your email!");
        }
    };

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
                <div>
                    <Typography level="h4" component="h1" textAlign={"center "}>
                        Welcome!
                    </Typography>
                    <Typography level="body1" textAlign={"center "}>
                        Enter your email address and we'll send you an email
                        with instructions to reset your password.
                    </Typography>
                </div>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        // html input attribute
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="on"
                    />
                </FormControl>
                <Button sx={{ mt: 1 /* margin top */ }} onClick={resetPassword}>
                    Send
                </Button>
                <Typography
                    endDecorator={<Link to="/api/v1/login/">Login</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: "center" }}
                >
                    Back to
                </Typography>
            </Sheet>
        </CssVarsProvider>
    );
}

export default ResetPassword;
