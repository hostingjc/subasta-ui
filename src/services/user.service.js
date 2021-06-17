import axios from "axios";


const ServiceUser = {};


const useRegister = (data) =>{  
   return axios.post('register', data);
}

ServiceUser.useRegister = useRegister;


export default ServiceUser;