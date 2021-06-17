import jwtDecode from "jwt-decode";
import { Redirect, withRouter } from "react-router-dom";
import useAuth from "../auth/useAuth";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const AuthVerify = ({ history }) => {
  history.listen(() => {  // <--- Here you subscribe to the route change
    if (localStorage.getItem("token")) {
      const jwt_Token_decoded = jwtDecode(localStorage.getItem("token"));
      console.log(jwt_Token_decoded.exp * 1000);
      console.log(Date.now());
      if (jwt_Token_decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");



        MySwal.fire({
          title: <p>Hello World</p>,
          footer: 'Copyright 2018',
          didOpen: () => {
            // `MySwal` is a subclass of `Swal`
            //   with all the same instance & static methods
            MySwal.clickConfirm(
              window.location.replace("/dashboard")

            )

          }
        }).then(() => {
          return MySwal.fire(<p>Shorthand works too</p>)
        })
     
      
       
    
      } else {
        console.log('hola');
      }
    }
  });
  return <div></div>;
};

export default withRouter(AuthVerify);