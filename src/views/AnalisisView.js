import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom'
import { getAnalisisById } from "../services/analisisServices";


export default function AnalisisView() {
  const [analisis, setAnalisis] = useState([]);
  
  const { id } = useParams()

  const getAnalisis = async () => {
    try {
      let analisisObtenido = await getAnalisisById(id);
      setAnalisis(analisisObtenido);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getAnalisis();
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="fw-bold">{analisis.analisis_name}</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img
              className="img-fluid"
              src={analisis.analisis_image}
              alt={analisis.analisis_name}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <h5 className="fw-bold">Descripción</h5>
            <p>{analisis.analisis_description}</p>
            <div className="py-3 d-flex justify-content-between">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
