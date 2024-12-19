import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/login.css";
import immobilierImg from "../images/immobilier.jpg";
import axios from "axios"; // Import axios for API requests

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // Validate input fields
    const validateFields = () => {
        const newErrors = {};
        if (!username.trim()) newErrors.username = "Le nom d'utilisateur est requis.";
        if (!password.trim()) newErrors.password = "Le mot de passe est requis.";
        return newErrors;
    };

    const handleLogin = async () => {
        const validationErrors = validateFields();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    
        try {
            console.log("Sending data: ", { username, password });
    
            const loginResponse = await axios.post(
                "http://localhost:8000/auth/login/",
                { username, password },
                { headers: { "Content-Type": "application/json" } }
            );
    
            if (loginResponse.status === 200) {
                const { access } = loginResponse.data;
                localStorage.setItem("token", access);
                setMessage("Connexion réussie !");
                setErrors({});
                navigate("/dashboard");
            }
        } catch (error) {
            if (error.response) {
                setErrors({ general: error.response.data.error || "Échec de la connexion. Veuillez réessayer." });
            } else {
                setErrors({ general: "Une erreur s'est produite. Veuillez réessayer plus tard." });
            }
        }
    };
    

    
    

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-section">
                    <div className="login-card">
                        <h2 className="login-card-title">Connexion</h2>
                        {errors.general && <p className="login-general-error">{errors.general}</p>}
                        {message && <p className="login-success-message">{message}</p>}
                        <div className="login-input-group">
                            <input
                                type="text"
                                placeholder="Nom d'utilisateur"
                                className="login-input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && <p className="login-error">{errors.username}</p>}
                        </div>
                        <div className="login-input-group">
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                className="login-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="login-error">{errors.password}</p>}
                        </div>
                        <button className="login-button" onClick={handleLogin}>
                            Connexion
                        </button>
                    </div>
                </div>

                <div className="instructions-section">
                    <img src={immobilierImg} alt="Immobilier" className="instructions-image" />
                    <h2 className="instructions-title">Instructions</h2>
                    <p className="instructions-text">
                        Bienvenue sur notre plateforme. Ce site web est conçu pour vous permettre de suivre vos
                        performances et d'accéder à des outils spécifiques. Pour commencer, connectez-vous avec votre
                        nom d'utilisateur et votre mot de passe.
                    </p>
                    <ul className="instructions-list">
                        <li>Gérer vos tâches et vos projets en cours.</li>
                        <li>Accéder à vos données et rapports personnalisés.</li>
                        <li>Collaborer avec d'autres membres de votre équipe.</li>
                    </ul>
                    <p className="instructions-text">
                        Si vous avez des questions ou des problèmes pour vous connecter, veuillez contacter le
                        support technique.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
