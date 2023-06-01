import "./css_files/HomePage.css"
import { useNavigate } from "react-router"

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="homePage">
            <div className="welcomeDiv">
                <h1>Welcome to the business cards of tomorrow!</h1>
                <button onClick={() => navigate("/api/v1/signup")}>Sign Up!</button>
            </div>
        </div>
    )
}