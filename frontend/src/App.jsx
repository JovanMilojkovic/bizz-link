import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useParams } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import PageNotFound from "./components/PageNotFound";
import { useEffect, useState } from "react";
import useGlobalState from "./globalState";
import EditUserProfile from "./components/EditUserProfile";
import BusinessCard from "./components/BusinessCard";
import ContactsPage from "./components/ContactsPage";

function App() {
    const jwt = localStorage.getItem("jwtToken");

    return (
        <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/api/v1/signup" element={<SignUp />} />
            <Route path="/api/v1/login" element={<Login />} />
            <Route path="/api/v1/resetpassword" element={<ResetPassword />} />
            <Route path="/api/v1/error" element={<Error />} />
            <Route path="/api/v1/business-card/:username" element={<BusinessCard/>} />
            <Route
                path="/dashboard/:userId"
                element={jwt ? <Dashboard /> : <PageNotFound />}
            />
            <Route
                path="/dashboard/edit-user/:userId"
                element={jwt ? <EditUserProfile /> : <PageNotFound />}
            />
            <Route
                path="/dashboard/contacts"
                element={jwt ? <ContactsPage /> : <PageNotFound />}
            />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        </>
    );
}

export default App;
