import React from "react";
import useGlobalState from "../globalState";
import Error from "./Error";

export default function Dashboard() {
    const logInUserData = useGlobalState((selector) => selector.user);
    if (logInUserData === null) {
        return <Error />;
    }
    const { name } = logInUserData;

    return (
        <div>
            <h3>Hello {name} :)</h3>
        </div>
    );
}
