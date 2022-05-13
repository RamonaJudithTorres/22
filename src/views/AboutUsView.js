import React from 'react'

export default function AboutUsView() {
  return (
    <div className="container my-5">
    <div className="row pb-5">
        <div className="col-md-6" >
            <h2 id="habilidades" style={{color: "navy"}}>MISIÓN: </h2>
            <p className='textAboutus'style={{textAlign: "justify"}}>
            Parte de nuestra misión es brindar un servicio de exámenes de análisis clínicos de calidad eficientes,confiables y oportunos, que nuestros clientes queden satisfechos con el trato humano y calificado
            </p>
        </div>
        <div className="col-md-6"></div>
    </div>

    <div className="row pb-5">
        <div className="col-md-6"></div>
        <div className="col-md-6">
            <h2 id="educacion"style={{color: "navy"}}>VISIÓN:</h2>
            <p className='textAboutus'  style={{textAlign: "justify"}} >
            Cubrir las necesidades de nuestros pacientes como de otras entidades clínicas convirtiéndonos en una opción de confianza
            </p>
        </div>
    </div>

</div>
  )
}
