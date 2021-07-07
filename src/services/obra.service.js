import axios from "axios";


const serviceObra = {};

const useCreate = async (data) =>{  
    return await axios.post('obras', data, {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}});
}

const useCatalogo = async (url) => {
    return await axios.get('catalogo'+url);
}

const useObraPublica = async (data) => {
    const id = data;
    return await axios.get('obrapublica/' + id)
}



serviceObra.useCreate = useCreate;
serviceObra.useCatalogo = useCatalogo;
serviceObra.useObraPublica = useObraPublica;


export default serviceObra;