import axios from "axios";
import { Alert } from "react-bootstrap";
//axios es la libreria para hacer peticiones

const URL = `https://624b594f71e21eebbcf100fd.mockapi.io/analisis`
//el env es un objeto que va ayudarte a acceder a tus variables de entorno
// para utilizar await tengo que utilizarlo dentro de un bloque que sea de async

const getAnalisis = async()=>{
    //en el caso de que yo no le pase nada, toma el valor que le dé.
    //en este caso le estoy pasando que por defecto tome el valor de vacío, gracias a esto , me mostrará todo.
    try{
        //intenta ejecutar este bloque de codigo
        // equivalente al .then 
        let {data} = await axios.get(URL)
        return data 
    }catch{
                console.log('error')
            //si hay errores captura ese error
    }
}

const getAnalisisById = async (id) =>{
    try{    
        let{data} = await axios.get(`${URL}/${id}`)
        return data
    }catch{
        console.log('error')
    }

}

export{
    getAnalisisById,
    getAnalisis
}
