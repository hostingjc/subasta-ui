import axios from "axios";


const ServiceUser = {};


const useRegister = (data) =>{  
   return axios.post('register', data);
}

const useForgot = (data) => {
   return axios.post('forgot', data);
}



ServiceUser.useRegister = useRegister;
ServiceUser.useForgot = useForgot;

export default ServiceUser;