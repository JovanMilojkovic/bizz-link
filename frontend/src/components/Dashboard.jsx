import useGlobalState from "../globalState";
import Error from "./Error";

export default function Dashboard() {
    const logInUserData = useGlobalState((selector) => selector.user);
    if (logInUserData === null) {
        return <Error />;
    }
    const { username } = logInUserData;

    return (
        <div>
            <h3>Hello {username} :)</h3>
        </div>
    );
}
