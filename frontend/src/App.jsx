import "./App.css";
import FetchFromBackend from "./components/HelloFromBackend";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import UserCreator from "./components/UserCreator";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<FetchFromBackend />} />
                <Route path="/createUser" element={<UserCreator />} />
                <Route path="/api/v1/login" element={<LoginPage />} />
            </Routes>
        </>
    );
}

export default App;
