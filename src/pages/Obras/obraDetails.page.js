import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//import fondo from './../../assets/img/backggroud-adam.jpg'
import ReactPlayer from 'react-player'
import './../../assets/obradetais.css'
import serviceObra from "../../services/obra.service"


export default function ObraDetails(){

   

    const [video, setVideo] = useState(null);
    const [detalles, setDetalles] = useState([]);
    const [datos, setDatos] = useState({
        valor: '',
});


    const {id}= useParams();

    const youtube = 'https://www.youtube.com/watch?v=';
    const RutaImagenInterna = 'http://subasta.com/img/winwardialeviosa/internas/'



    useEffect(()=>{

        

        serviceObra.useObraPublica(id).then(res => {

            console.log(res.data);
            console.log('https://www.youtube.com/watch?v='+res.data[0].video);
            
            setDetalles(res.data);

            

            setDatos({valor: res.data[0].valor})

            if(res.data[0].video !== null){

                mostrarVideo(res.data[0].video);

                console.log(video);
                //setVideo('https://www.youtube.com/watch?v='+res.data[0].video);  
            }
            


        }).catch(err => {

            console.log(err.response);

        })
        
        
            const mostrarVideo= (data) => {
        setVideo(data);      
    }

    },[id, video]);

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(datos.valor);
        const data = {
            id: id,
            valor : datos.valor,
        }
    }

    const checkMax = (object) => {
        console.log(object.target.value.length)

        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
             }
    }
   

  


        return(<div>
            
         
<div id="Content" className="no-padding ">
	<div className="content_wrapper clearfix">

<div className="sections_group">

{Object.keys(detalles).map((oKey, e) => (  


<div className="section mcb-section full-screen bg-cover fondo-custom" style={{backgroundImage:`url(${RutaImagenInterna+detalles[oKey].imagen_interna})`}} 
            >
      
    <div className="section_wrapper mcb-section-inner">
            <p className="textoRelleno"  >fffff</p>
        </div>



        </div>

))}



        { video === 'null'  &&
<>
        <div className="section mcb-section section-custom" >
    

            <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix"  >
                <div className="mcb-wrap-inner">
                    <div className="column mcb-column one-fourth column_placeholder">
                        <div className="placeholder">&nbsp;
                        </div>
                        </div></div>



 <div className="column mcb-column one-second column_column pt-5 pb-5 ">
            <div className="column_attr clearfix" >
            {Object.keys(detalles).map((oKey, e) => (                
                                <h2 key={e} >{detalles[oKey].autor}</h2>
            ))}

<hr className="no_line hr-custom" />



{Object.keys(detalles).map((oneKey, i) => (

<p key={i}>

{detalles[oneKey].titulo != null && <>
 Título: {detalles[oneKey].titulo} <br/>
</>
}

{detalles[oneKey].tecnica != null && <>
Técnica: {detalles[oneKey].tecnica} <br/>
</>
}
{detalles[oneKey].fecha != null && <>
Fecha: {detalles[oneKey].fecha} <br/>
</>
}
{detalles[oneKey].medidas != null && <>
Medidas: {detalles[oneKey].medidas} <br/>
</>
}
{detalles[oneKey].edicion != null && <>
Edición: {detalles[oneKey].edicion} <br/>
</>
}
{detalles[oneKey].ubicacion != null && <>
Ubicación: {detalles[oneKey].ubicacion} 
</>
}




</p>

))}



</div>




</div>


{/*----------------------------------------------------------------------------- */}


</div>
</div>

</div>

</>
}
</div>


{ video !== 'null' &&

<>
<div className="container  py-5">
<div className="row pt-5 pb-5">

<div className="col-sm-5 offset-1">

{Object.keys(detalles).map((oKey, e) => (
<h2 key={e} >{detalles[oKey].autor}</h2>
))}

<hr className="no_line hr-custom"/>


{Object.keys(detalles).map((oneKey, i) => (

    <p key={i} className="texto-descriptivo">
    
    {detalles[oneKey].titulo != null && <>
     Título: {detalles[oneKey].titulo} <br/>
    </>
    }

    {detalles[oneKey].tecnica != null && <>
    Técnica: {detalles[oneKey].tecnica} <br/>
    </>
    }
    {detalles[oneKey].fecha != null && <>
    Fecha: {detalles[oneKey].fecha} <br/>
    </>
    }
    {detalles[oneKey].medidas != null && <>
    Medidas: {detalles[oneKey].medidas} <br/>
    </>
    }
    {detalles[oneKey].edicion != null && <>
    Edición: {detalles[oneKey].edicion} <br/>
    </>
    }
    {detalles[oneKey].ubicacion != null && <>
    Ubicación: {detalles[oneKey].ubicacion} 
    </>
    }




    </p>

))}

{Object.keys(detalles).map((key, i) => (<p key={i}>

    <form onSubmit={handleSubmit} className="row g-3">
       

  <div className="col-auto">
  <div class="input-icon">
    <label for="inputPassword2" className="visually-hidden">Password</label>
    <input type="number" name="valor" step="any"  maxLength = "6" onInput={checkMax} max="999999" className="valorObra" value={datos.valor} onChange={handleInputChange}/>
    <i>$</i>

    </div>
  </div>

  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Pujar</button>
  </div>

    </form>



</p>) )}
                   
                                

</div>

<div className="col-sm-5 ">



<ReactPlayer

          url={youtube+video}
          className='react-player'
          
          width='90%'
          height='350px'
        />      




</div>
             

</div>
</div>

</>

}


<div className="section the_content no_content">
    <div className="section_wrapper">
        
        <div className="the_content_wrapper">


        </div>
        
        </div>
        
        </div>


		</div>
	
					
	</div>



</div>








       )



}