import "./App.css";
import FetchFromBackend from "./components/HelloFromBackend";
import NavBar from "./components/NavBar";
import UserCreator from "./components/UserCreator";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<FetchFromBackend />} />
                <Route path="/createUser" element={<UserCreator />} />
            </Routes>
        </>
    );
}

export default App;
