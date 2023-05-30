import { useState } from "react";

export default function FetchFromBackend() {
    const [response, setResponse] = useState("");

    const hello = async () => {
        const respData = await fetch("http://localhost:8080/root");
        const stringResponse = await respData.text();

        setResponse(stringResponse);
    };

    hello();
    return (
        <div>
            <p>{response}</p>
        </div>
    );
}
