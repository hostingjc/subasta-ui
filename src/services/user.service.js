import axios from "axios";

const ServiceUser = {};


// Set config defaults when creating the instance
const instance = axios.create({
   baseURL: 'http://store.juandiaz.co.ve/api/'
 });
 
 // Alter defaults after instance has been created
 instance.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('token');
 instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
 

const useRegister = (data) =>{  
   return axios.post('register', data);
}

const useForgot = async (data) => {
   return await axios.post('forgot', data);
}

const useReset = async(data) => {
   return await axios.post('reset', data);
}

const useUsersPorAprobar = async(url) => {
   return await axios.get('user/poraprobar'+ url, {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}});
}

const useAprobar = async(data) => {
   const id = data;
   
   return await axios.put('user/aprobar/' + id, id, {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}});
}

const useDesaprobar = async(id) => {
   return await axios.put('user/desaprobar/'+id, id, {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
}

ServiceUser.useRegister = useRegister;
ServiceUser.useForgot = useForgot;
ServiceUser.useReset = useReset;
ServiceUser.useUsersPorAprobar = useUsersPorAprobar;
ServiceUser.useAprobar = useAprobar;
ServiceUser.useDesaprobar = useDesaprobar;

export default ServiceUser;