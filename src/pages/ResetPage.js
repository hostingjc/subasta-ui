import SubHeader from "../components/SubHeader"
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useState } from 'react';
import serviceUser from "../services/user.service";




export default function ResetPage(props){

    const MySwal = withReactContent(Swal);

    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;  
   
    const [datos, setDatos] = useState({
        password: '',
        password_confirm: ''
    })

    const { token } = useParams();   


    const handleInputChange = (event) => {
       
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }


    const handleReset = (event) => {
        event.preventDefault();

        MySwal.fire({
            type : 'error',
            title : 'Cambiando Password...',
            icon: 'info',
            timer: 10000,
            timerProgressBar: true,
            showConfirmButton: false, 
          });


        console.log('enviando datos...' + token + datos.confirm_password + ' ' + datos.password)
        const data = {
            token: token,
            password: datos.password,
            confirm_password: datos.confirm_password
        }

        serviceUser.useReset(data).then(res =>{
            console.log(res);


            MySwal.fire({
                title :'Contraseña Cambiada',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false, 
              });

            history.push(previusObjectURL || "/login")



        }).catch(error => {
            console.log(error);
            console.log(error.response.data.message);

            if(error.response.data.password || error.response.data.confirm_password){


                MySwal.fire({
                    type : 'error',
                    title : <ul>  
                    <li>{error.response.data.password}</li>
                    <li>{error.response.data.confirm_password}</li>  </ul>,
                    icon: 'error',
                    timer: 3000,
                    width: 500,
                    timerProgressBar: true,
                    showConfirmButton: false, 
                  });
    

            }else if(error.response.data.message){

                MySwal.fire({
                    type : 'error',
                    title : <ul>  
                    <li>{error.response.data.message}</li> </ul>,
                    icon: 'error',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false, 
                  });
    


            }





        })
       
       // history.push(previusObjectURL || "/dashboard")
    }




    return (<div>

        <SubHeader title={'Resetear Contraseña'}/>



        <div className="container mt-3 py-5">
  <div className="row">
    <div className="col-4 offset-4 justify-content-md-center">

    <div className="card">
  <div className="card-body">
 
 

  <form onSubmit={handleReset}> 
      


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






    </div>)

}