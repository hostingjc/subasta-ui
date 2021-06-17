import axios from "axios";
import { createContext, useState, useEffect } from "react";


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
    login(data) {

      axios.post('login', data).then(
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
        
          console.log(error)
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
