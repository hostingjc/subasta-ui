import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubHeader from "../../components/SubHeader";
import serviceObra from "../../services/obra.service";


const EditarObra = () => {
    
  
    const {slug}= useParams();

    const [datos, setDatos] = useState({
        autor:'',
        titulo: '',
        valor: '',
        video: '',
        img_destacada: ''
    })
     const [id, setId] = useState('');

    const [imagedata, setImageData] = useState(String);
    const [imageInterna, setImagenInterna] = useState(String);

    const RutaImagenDestacada = 'http://subasta.com/img/winwardialeviosa/destacadas/';
    const RutaImagenInterna = 'http://subasta.com/img/winwardialeviosa/internas/';

    useEffect(() => {
        serviceObra.useObraPublica(slug).then(res => {
            console.log(res)

            
            setDatos({autor: res.data[0].autor,
                    titulo: res.data[0].titulo,
                     valor: res.data[0].valor,
                     video: res.data[0].video,
                     img_destacada: res.data[0].imagen_destacada,
                     img_interna: res.data[0].imagen_interna
                    })
            setId(res.data[0].id);
           

        }).catch(err => {console.log(err.response)})

    },[]);

 
    const handleObra = (e) => {
        e.preventDefault();

        const data = new FormData();
        
        console.log(datos)

        data.append('autor', datos.autor);
        data.append('titulo', datos.titulo);
        data.append('valor', datos.valor);
        data.append('video', datos.video);
        data.append('imagen_destada', imagedata);
        data.append('imagen_interna', imageInterna);

        serviceObra.useEditObra(id, data)
           .then(res => console.log(res.data))
           .catch(err => {
            console.log(err.response);
        })


    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    
    const subirArchivos = (e) => {

        console.log(e);
        console.log(e[0]);
        
       // const imageFile = e[0];
     //  const imageUrl = URL.createObjectURL(imageFile);

        setImageData(e[0])

    }

    const subirImagenInterna = (e) => {

        console.log(e);
        console.log(e[0]);

        setImagenInterna(e[0]);
    }

    return(<div>
       
       
       <SubHeader title={'Editar Obra'} />

                       
       <div className="container mt-3 py-5">
  <div className="row">
    <div className="col-6 offset-3 justify-content-md-center">

    <div className="card">
  <div className="card-body">
 
 

  <form onSubmit={handleObra} > 
      
        

        <div className="mb-4 ">
               <label>Autor</label>
               <input type="text" value={datos.autor} className="form-control form-control-lg" placeholder="Name"
              onChange={ handleInputChange }  
              name="autor"/>
         </div>
           
        
         <div className="mb-4 ">
               <label>Titulo</label>
               <input type="text" value={datos.titulo} className="form-control form-control-lg" placeholder="Titulo de Obra"
              onChange={ handleInputChange }  
              name="titulo"/>
         </div>


         <div className="mb-4 ">
               <label>Imagen Destacada</label>
 

 <input type="file"  id="imagee" name="imagen_destacada" 
 className="form-control form-control-lg"  onChange={ (e) => subirArchivos(e.target.files)  }/>
          
         </div>


         <div className="mb-4 ">
               <label>Imagen Interna</label>
 

 <input type="file" id="imagee" name="imagen_interna" 
 className="form-control form-control-lg"  onChange={ (e) => subirImagenInterna(e.target.files)  }/>
          
         </div>




         <div className="mb-4 ">
               <label>Youtube</label>
               <input type="text" value={datos.video} className="form-control form-control-lg" placeholder="Ingrese el ID del video de Youtube | Ejemplo: ttsdneqwhOs"
              onChange={ handleInputChange }  
              name="video"/>
         </div>



         <div className="mb-3">
               <label>Valor</label>
               <input type="number" value={datos.valor} className="form-control form-control-lg" placeholder="Valor Inicial de la Obra" min="1" step="any"
               onChange={ handleInputChange }  name="valor"/>
         </div>



         <div className="d-grid gap-2">
               <button className="btn btn-primary" type="submit">Editar Obra</button>
         </div>

        

     
</form>
  </div>
</div>

   

    </div>
</div>




</div>




    </div>)
}

export default EditarObra;


