import { useState } from "react";
import "./App.css";
import FetchFromBackend from "./components/HelloFromBackend";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <FetchFromBackend />
        </>
    );
}

export default App;
