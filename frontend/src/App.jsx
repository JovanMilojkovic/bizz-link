import "./App.css";
import FetchFromBackend from "./components/HelloFromBackend";
import UserCreatorPage from "./components/UserCreatorPage";
import LoginPage from "./components/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<FetchFromBackend/>} />
                    <Route path='/createUser' element={<UserCreatorPage/>} /> 
                    <Route path="/login" element={LoginPage}/>   
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
