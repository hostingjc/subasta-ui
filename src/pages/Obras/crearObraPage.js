import { Fragment, useState } from 'react';
import SubHeader from '../../components/SubHeader';
import serviceObra from '../../services/obra.service';
 
 
 export default function CreaObraPage(){

    const [datos, setDatos] = useState({
        autor:'',
        titulo: '',
        valor: '',
        
    })

    const [imagedata, setImageData] = useState(String);
    const [imageInterna, setImagenInterna] = useState(String);


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


    const handleInputChange = (event) => {
           

   //  const imageFile = event.target.image[0];
     
    // console.log(imageFile);
     //const imageUrl = URL.createObjectURL(imageFile);
    // setImageData(imageUrl)


        

        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })

    }

   

    
    const handleObra = (event) => {
        event.preventDefault();

        console.log(imagedata);
        const data = new FormData();
        
        data.append('autor', datos.autor);
        data.append('titulo', datos.titulo);
        data.append('valor', datos.valor);
        data.append('video', datos.video);
        data.append('imagen_destada', imagedata);
        data.append('imagen_interna', imageInterna);


        //data.append('imagen_destada', imagedata);
        serviceObra.useCreate(data).then(
        (response) => {

            console.log(response);
        
        }
        ).catch(error => {
         
              console.log(error.response)

  
        }
    )
}

     return (
        <Fragment>

                <SubHeader title={'Crear Obra'} />

               
                <div className="container mt-3 py-5">
  <div className="row">
    <div className="col-6 offset-3 justify-content-md-center">

    <div className="card">
  <div className="card-body">
 
 

  <form onSubmit={handleObra} > 
      
        

        <div className="mb-4 ">
               <label>Autor</label>
               <input type="text" className="form-control form-control-lg" placeholder="Name"
              onChange={ handleInputChange }  
              name="autor"/>
         </div>
           
        
         <div className="mb-4 ">
               <label>Titulo</label>
               <input type="text" className="form-control form-control-lg" placeholder="Titulo de Obra"
              onChange={ handleInputChange }  
              name="titulo"/>
         </div>


         <div className="mb-4 ">
               <label>Imagen Destacada</label>
 

 <input type="file" id="imagee" name="imagen_destacada" 
 className="form-control form-control-lg"  onChange={ (e) => subirArchivos(e.target.files)  }/>
          
         </div>


         <div className="mb-4 ">
               <label>Imagen Interna</label>
 

 <input type="file" id="imagee" name="imagen_destacada" 
 className="form-control form-control-lg"  onChange={ (e) => subirImagenInterna(e.target.files)  }/>
          
         </div>




         <div className="mb-4 ">
               <label>Youtube</label>
               <input type="text" className="form-control form-control-lg" placeholder="Ingrese el ID del video de Youtube | Ejemplo: ttsdneqwhOs"
              onChange={ handleInputChange }  
              name="video"/>
         </div>



         <div className="mb-3">
               <label>Valor</label>
               <input type="number" className="form-control" placeholder="Valor Inicial de la Obra" min="1" step="any"
               onChange={ handleInputChange }  name="valor"/>
         </div>



         <div className="d-grid gap-2">
               <button className="btn btn-primary" type="submit">Crear Obra</button>
         </div>

        

     
</form>
  </div>
</div>

   

    </div>
</div>




</div>





        </Fragment>   
     )
 }