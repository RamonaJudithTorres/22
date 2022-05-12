import {useState, useEffect } from 'react'
import Carrusel from '../components/Carrusel'
import Footer from '../components/Footer'
import Analisis from '../components/Analisis'
import GroupAnalisis from '../components/GroupAnalisis.js'
import { getAnalisis } from '../services/analisisServices'

export default function Portada(){

const[analisis, setAnalisis] =useState([])

const obtenerAnalisis = async() =>{
    try{ let analisisObtenidos= await getAnalisis()
        setAnalisis(analisisObtenidos)
    }
    catch{

    }
}

useEffect(()=>{
    obtenerAnalisis()},[])

    return(
            <div >
                <div  className="col-lg-12 mt-5">
                <Carrusel/> 
                </div>
                < GroupAnalisis analisis={analisis}/>  
                <Footer/>
            </div>
    )
}