import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function GroupAnalisis({ analisis }) {
  console.log(analisis);

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          {analisis.map((estudio, i) => (

            /*<div className="col-6 col-lg-6" key={i}>
              <img
                src={estudio.analisis_image}
                alt="ALGO MUY COOL"
                className="card-img-top" />
              <div className="card-body">
                <h3 className=""> {estudio.analisis_name}</h3>
                <p className=""> {estudio.analisis_description}</p>
              </div>
            </div>*/

            /* GRACIAS A MI COMPITA Suresh Dasari por este card design horizontal. Eres Grande. */
            <div className="col-12 col-lg-12 mt-5" key={i}>

            <div className="card border-light">
            <div className="row no-gutters">
                <div className="col-sm-5">
                    <img className="card-img" src={estudio.analisis_image} alt="Card"/>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">{estudio.analisis_name}</h5>
                        <p className="card-text">{estudio.analisis_description}</p>
                        <a href="#" className="btn btn-primary">Ver más</a>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
        </div>



          ))}
        </div>
      </div>
    </div>
  );
}
