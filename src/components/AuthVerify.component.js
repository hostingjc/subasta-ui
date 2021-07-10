//import jwtDecode from "jwt-decode";
import { withRouter } from "react-router-dom";
//import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'

//const MySwal = withReactContent(Swal);

const AuthVerify = ({ history }) => {
  
  
 
  history.listen(() => {  // <--- Here you subscribe to the route change
    /*
   
    if (localStorage.getItem("token")) {
      const jwt_Token_decoded = jwtDecode(localStorage.getItem("token"));
      console.log(jwt_Token_decoded.exp * 1000);
      console.log(Date.now());
      if (jwt_Token_decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");



        MySwal.fire({
          title: <p>Cerrando Session</p>,
          footer: 'Copyright 2021',
          timer: 60000,
          icon: 'warning',
          showCancelButton: false, 
          showConfirmButton: false,
          didOpen: () => {
            // `MySwal` is a subclass of `Swal`
            //   with all the same instance & static methods
            //MySwal.clickConfirm()
            window.location.replace("/dashboard")
          }
        }).then(() => {
         
          return MySwal.fire(<p>Cerrando Session</p>)
        })
     
      
       
    
      } else {
        console.log('hola');
      }


      
    }

    */
  });
  return <div></div>;
};

export default withRouter(AuthVerify);