import "./App.css";

import UserCreatorPage from "./components/UserCreatorPage";
import LoginPage from "./components/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/createUser' element={<UserCreatorPage/>} /> 
                    <Route path="/login" element={LoginPage}/>   
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
