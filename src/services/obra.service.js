import axios from "axios";


const serviceObra = {};

const useCreate = async (data) =>{  
    return await axios.post('obras', data, {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}});
}

const enviarPuja = async (data) => {
    return await axios.post('puja', data, {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
}

const useDeleteObra = async(id) => {
    return await axios.delete('obras/'+id, {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
}

const useObrasEliminadas = async(url) => {
    return await axios.get('obras/eliminadas'+url, {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
}

const useCatalogo = async (url) => {
    return await axios.get('catalogo'+url);
}

const useObraPublica = async (slug) => {
    
    return await axios.get('obrapublica/' + slug)
}

const useEditObra = async(id, data) => {
    return await axios.put('obras/'+id, data,{headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}});
}



serviceObra.useCreate = useCreate;
serviceObra.useCatalogo = useCatalogo;
serviceObra.useObraPublica = useObraPublica;
serviceObra.enviarPuja = enviarPuja;
serviceObra.useObrasEliminadas = useObrasEliminadas;
serviceObra.useDeleteObra = useDeleteObra;
serviceObra.useEditObra = useEditObra;


export default serviceObra;