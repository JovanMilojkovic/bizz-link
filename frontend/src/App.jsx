import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import useGlobalState from "./globalState";

function App() {
    const jwtToken = useGlobalState((selector) => selector.userToken);
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/api/v1/signup" element={<SignUp />} />
                <Route path="/api/v1/login" element={<Login />} />
                <Route
                    path="/api/v1/resetpassword"
                    element={<ResetPassword />}
                />
                <Route path="/api/v1/error" element={<Error />} />
                <Route
                    path="/dashboard/*"
                    element={jwtToken == null ? <Error /> : <Dashboard />}
                />
            </Routes>
        </>
    );
}

export default App;
