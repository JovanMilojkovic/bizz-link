import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import UserCreator from "./components/UserCreator";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/createUser" element={<UserCreator />} />
                <Route path="/api/v1/login" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </>
    );
}

export default App;
