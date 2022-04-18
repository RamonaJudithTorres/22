import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function GroupAnalisis({ analisis }) {
  console.log(analisis);

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          {analisis.map((estudio, i) => (
            <div className="col-6 col-lg-3" key={i}>
              <img
                src={estudio.analisis_image}
                alt="ALGO MUY COOL"
                className="card-img-top"/>

              <div className="card-body">
                <h3 className=""> {estudio.analisis_name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
