import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import userService from '../services/user.service';
import SubHeader from '../components/SubHeader';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './../assets/register.css';

const MySwal = withReactContent(Swal);


export default function RegisterPage() {

  
    
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;
   
    const [datos, setDatos] = useState({
        name:'',
        email: '',
        password: '',
        confirm_password:''
    })

 
    

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }







    const handleLogin = (event) => {
        event.preventDefault();


        MySwal.fire({
            type : 'error',
            title : 'Registrando',
            icon: 'info',
            timer: 10000,
            timerProgressBar: true,
            showConfirmButton: false, 
          });

        const data = {
            name: datos.name,
            email: datos.email,
            password: datos.password,
            confirm_password: datos.confirm_password
        }

        userService.useRegister(data).then(
        (response) => {

            console.log(response);
            history.push(previusObjectURL || "/revision")
        }
        ).catch(

           
        error => {
         

            MySwal.fire({
                type : 'error',
                title : <ul>  <li>{error.response.data.error.name}</li>
                <li>{error.response.data.error.email}</li>
                <li>{error.response.data.error.password}</li>
                <li>{error.response.data.error.confirm_password}</li>  </ul>,
                icon: 'error',
                timer: 3000,
                width: 600,
                timerProgressBar: true,
                showConfirmButton: false, 
              });

              



  
        }
    )
          


      //  auth.login(data);
     //   history.push(previusObjectURL || "/dashboard")
    }



    
    
    
    return (



<div >

<SubHeader title={'Registro'}/>
     
        <div className="container mt-3 py-5">
  <div className="row">
    <div className="col-6 offset-3 justify-content-md-center">

    <div className="card">
  <div className="card-body">
 
 

  <form onSubmit={handleLogin} > 
      
        

        <div className="mb-4 ">
               <label>Nombre</label>
               <input type="text" className="form-control form-control-lg" placeholder="Name"
              onChange={ handleInputChange }  
              name="name"/>
         </div>
           
        
         <div className="mb-4 ">
               <label>Email</label>
               <input type="email" className="form-control form-control-lg" placeholder="Email"
              onChange={ handleInputChange }  
              name="email"/>
         </div>



         <div className="mb-3">
               <label>Password</label>
               <input type="password" className="form-control" placeholder="Password"
               onChange={ handleInputChange }  name="password"/>
         </div>

         <div className="mb-3">
               <label>Confirmar Password</label>
               <input type="password" className="form-control" placeholder="Password"
               onChange={ handleInputChange }  name="confirm_password"/>
         </div>


         <div className="d-grid gap-2">
               <button className="btn btn-primary" type="submit">Registro</button>
         </div>

        

     
</form>
  </div>
</div>

   

    </div>
</div>

</div>










</div>

    )
}
