import { Link } from "react-router-dom";
import useGlobalState from "../globalState";
import "./css_files/Error.css";

function Error() {
    const logInFailed = useGlobalState((selector) => selector.logInFailed);
    const signupFailed = useGlobalState((selector) => selector.signupFailed);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>Try to login</h2>
                        <div className="error-details">
                            <b>
                                Error:{" "}
                                {logInFailed !== null
                                    ? logInFailed
                                    : signupFailed}
                            </b>
                        </div>
                        <div className="error-actions">
                            <Link
                                to="/api/v1/login/"
                                className="btn btn-primary btn-lg "
                            >
                                <span className="glyphicon glyphicon-home"></span>
                                Back to login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;
