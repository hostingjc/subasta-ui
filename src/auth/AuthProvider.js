import axios from "axios";
import { createContext, useState, useEffect } from "react";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal);


// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://store.juandiaz.co.ve/api/'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');;

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );



  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      localStorage.removeItem("user");
      console.log(error);
    }
  }, [user]);

  const contextValue = {
    user,
    async login(data) {

      await axios.post('login', data).then(
        (response) => {  
          //console.log(response.data.user)
          //console.log(response.data.token)
          setUser(response.data.user)
          localStorage.setItem('token', response.data.token);
          //  localStorage.setItem('token', response.data.token);
            //  this.setState({loggedIn: true})
            //  this.props.setUser(response.data.user);
      
      }
      ).catch(error => {

        console.log(error.response);

        if(error.response === undefined){

          MySwal.fire({
            type : 'error',
            title : 'Problemas en el Servidor',
            icon: 'error',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false, 
          });

        }else if(error.response.data.msg){

          MySwal.fire({
              type : 'error',
              title : error.response.data.msg,
              icon: 'error',
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: false, 
            });


       }else if(error.response.data.email || error.response.data.password){

        MySwal.fire({
          type : 'error',
          title : <ul>
          <li>{error.response.data.email}</li>
          <li>{error.response.data.password}</li>
        </ul>,
          icon: 'error',
          timer: 3000,
          width: 400,
          timerProgressBar: true,
          showConfirmButton: false, 
        });

       }

      





 


      })

  


      //setUser({ id: 1, username: "luis50" });
    },
    logout() {
      setUser(null);
      localStorage.removeItem("token");
    },
    isLogged() {
      return !!user;
    },
    showUser(){
      return user;
    },
    verifyAuth(){
      
      if(localStorage.getItem('token')){

        axios.post('test', {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}}).then(
          res => {
            //setUser(user);
            console.log(res.data)
          }
          ).catch(err => {
            console.log(err)
            //localStorage.removeItem("token");
            //setUser(null);

          })

      }else{

          console.log('No esta autenticado');

      }



    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
