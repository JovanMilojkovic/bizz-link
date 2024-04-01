import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function ActivationProfil() {
    const [responseData, setResponseData] = useState("");
    const url = window.location.href;
    const lastSlashIndex = url.lastIndexOf("/") + 1;
    const token = url.slice(lastSlashIndex);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${
                        import.meta.env.VITE_BACKEND_URL
                    }/activationlink/${token}`,
                    {
                        method: "GET",
                        mode: "cors",
                    }
                );
                setResponseData(await response.data);
                console.log(response.data);
            } catch (error) {
                setResponseData(await error.response.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-16">
                    <div className="error-template">
                        <h2>{responseData}</h2>
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

export default ActivationProfil;
