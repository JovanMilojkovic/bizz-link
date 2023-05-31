import "./App.css";
import FetchFromBackend from "./components/HelloFromBackend";
import UserCreator from "./components/UserCreator";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {

    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<FetchFromBackend/>} />
                    <Route path='/createUser' element={<UserCreator/>} />    
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
