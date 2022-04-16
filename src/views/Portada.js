import {useState, useEffect } from 'react'
import Carrusel from '../components/Carrusel'
import Footer from '../components/Footer'
import Analisis from '../components/Analisis'

export default function Portada(){

    return(
            <div >
                <Carrusel/>  
                <Analisis/>  

                <Footer/>
            </div>
    )
}