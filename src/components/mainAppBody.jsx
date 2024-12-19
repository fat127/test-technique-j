import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/body.css";
import body from "../images/body.png"
import imageAppartement from "../images/appartement.jpg"

import axios from "axios";



export default function MainAppBody() {
    const [villas, setVillas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVillas = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/villa/");
                setVillas(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des villas :", error);
            }
        };
    
        fetchVillas();
    }, []);
    

    return (
        <div className="villas-container">
            {villas.map((villa) => (
                <div key={villa.id} className="villa-card">
                    <div className="image-container">
                        <div className="image-body">
                            {/* Image placeholder - Ajoutez une image pour chaque villa si disponible */}
                            <img src= {body} alt="" />
                        </div>
                        <div className="button-group">
                            <button className="action-button-heart">
                                <i className="bi bi-heart"></i>
                            </button>
                            <button className="action-button-share">
                                <i className="bi bi-share"></i>
                            </button>
                            <button className="action-button-view" onClick={() => navigate(`/virtual-tour?id=${villa.id}`)}>
                                <i className="bi bi-globe"></i> 360°
                            </button>
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="info-card">
                            <h2 className="info-title">{villa.nom}</h2>
                            <p className="info-description">{villa.description}</p>
                            <ul className="info-list">
                                {villa.disponible ? <li>✅ Disponible dès maintenant</li> : <li>❌ Indisponible</li>}
                                <li>💰 Prix : <strong>{villa.prix} MAD</strong></li>
                                <li>📍 Emplacement : {villa.emplacement}</li>
                            </ul>
                            <div className="info-buttons">
                               <div className="info-buttons">
                        <button className="btn btn-primary" onClick={() => navigate("/virtual-tour")}>Visite virtuelle
                        </button>
                        <button className="btn btn-secondary">louer une villa</button>
                         </div>
                            </div>
                            <div className="image-container">
                <div className="image-body">
                    <img src={imageAppartement} alt=""  />
                </div>
            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
