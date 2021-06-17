
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from "../auth/useAuth";

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;
   
    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })


    const auth = useAuth();




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

        console.log('enviando datos...' + datos.email + ' ' + datos.password)
        const data = {
            email: datos.email,
            password: datos.password
        }

   

        auth.login(data);
        history.push(previusObjectURL || "/dashboard")
    }



   
    return (


        <div class="container mt-3">
  <div class="row">
    <div class="col-4 offset-4 justify-content-md-center">

    <div class="card">
  <div class="card-body">
  <form onSubmit={handleLogin} >
      
        <h1>Login</h1>

           
        
         <div className="mb-4 ">
               <label>Email</label>
               <input type="email" className="form-control form-control-lg" placeholder="Email"
              onChange={ handleInputChange }  
              name="email"
              
               />
         </div>

         <div className="mb-3">
               <label>Password</label>
               <input type="password" className="form-control" placeholder="Password"
               onChange={ handleInputChange }  name="password"/>
         </div>


         <div className="d-grid gap-2">
               <button className="btn btn-primary" type="submit">Login</button>
         </div>

        

     
</form>
  </div>
</div>

   

    </div>
</div>

</div>

      
       



    )
}
