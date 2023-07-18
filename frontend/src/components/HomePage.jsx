import "./css_files/HomePage.css"
import { useNavigate } from "react-router"

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="homePage">
            <div className="firstSection">
                <div className="welcomeDiv">
                    <h2>Welcome to the business cards of tomorrow!</h2>
                    <p>Connecting people easier than ever, with <b>digital business cards</b>.</p>
                    <button className="signUpButton" onClick={() => navigate("/api/v1/signup")}>Get your own!</button>
                </div>
            </div>
        </div>
    )
}