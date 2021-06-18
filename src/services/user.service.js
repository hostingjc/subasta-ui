import axios from "axios";
import { Redirect } from "react-router-dom";


const ServiceUser = {};



const useRegister = (data) =>{  
   return axios.post('register', data);
}

const useForgot = async (data) => {




   return await axios.post('forgot', data);
}

const useReset = async(data) => {
   return await axios.post('reset', data);
}



ServiceUser.useRegister = useRegister;
ServiceUser.useForgot = useForgot;
ServiceUser.useReset = useReset;

export default ServiceUser;