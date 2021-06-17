import SubHeader from "../components/SubHeader"
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import serviceUser from "../services/user.service";
//import { mytoast } from "../components/toast";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)
const MySwalExiste = withReactContent(Swal);


export default function ForgotPage(){


    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;
   
    const [datos, setDatos] = useState({
        email: '',
    })






    const [error, setError] = useState(null);

   

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }



    const handleForgot = (event) => {
        event.preventDefault();

        const data = {
            email: datos.email,
        }
 
        serviceUser.useForgot(data).then(
            res => {
                console.log(res);

            }
          

        ).catch(err =>{

            if(err.response.data.email){

                MySwalExiste.fire({
                    type : 'error',
                    title : err.response.data.email,
                    icon: 'error',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false, 
                  });


            }

            if(err.response.data.message){


                MySwal.fire({
                    type : 'error',
                    title : err.response.data.message,
                    icon: 'error',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false, 
                  });
    
            }
            console.log(err.response.data.email);

            console.log(err.response.data.message)
            //mytoast("error",err.response.data.message);  


          


            //setError(mostrarErrores(err.response.data.message));
          
        }
        );

       // history.push(previusObjectURL || "/dashboard")
    }



    return (<div>

        <SubHeader title={'Olvide mi Contraseña'}/>

        <div class="container mt-3">
  <div class="row">
    <div class="col-4 offset-4 justify-content-md-center">

    <div class="card">
  <div class="card-body">

{error}
  <form onSubmit={handleForgot} >
            
                
              
            <div className="mb-4 ">
               <label>Email</label>
               <input type="email" className="form-control form-control-lg" placeholder="Email"
              onChange={ handleInputChange }  
              name="email"
              
               />
         </div>

             <div className="d-grid gap-2">
                   <button className="btn btn-primary" type="submit">Enviar</button>
             </div>
                </form>


      </div></div></div></div></div>


    </div>)

}