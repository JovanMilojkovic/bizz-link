import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import PageNotFound from "./components/PageNotFound";
import EditUserProfile from "./components/EditUserProfile";
import BusinessCard from "./components/BusinessCard";
import ContactsPage from "./components/ContactsPage";
import { HashRouter, BrowserRouter } from "react-router-dom";
import ActivationProfil from "./components/ActivationProfil";

import { SharedDataProvider } from "./components/SharedDataContext";

function App() {
    return (
        <SharedDataProvider>
            <HashRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/api/v1/signup" element={<SignUp />} />
                    <Route path="/api/v1/login" element={<Login />} />
                    <Route
                        path="/activationlink/*"
                        element={<ActivationProfil />}
                    />
                    <Route
                        path="/api/v1/resetpassword"
                        element={<ResetPassword />}
                    />
                    <Route path="/api/v1/error" element={<Error />} />
                    <Route
                        path="/dashboard/:username"
                        element={<Dashboard />}
                    />
                    <Route path="/business-card/*" element={<BusinessCard />} />
                    <Route
                        path="/edit-user/:username"
                        element={<EditUserProfile />}
                    />
                    <Route
                        path="/dashboard/contacts"
                        element={<ContactsPage />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </HashRouter>
        </SharedDataProvider>
    );
}

export default App;
