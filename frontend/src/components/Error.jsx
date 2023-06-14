import { Link } from "react-router-dom";

import "./css_files/Error.css";
export default function Error({ message }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                            <b>{message}</b>
                        </div>
                        <div className="error-actions">
                            <Link
                                to="/api/v1/login/"
                                className="btn btn-primary btn-lg"
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
