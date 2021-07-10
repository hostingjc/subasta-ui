import { useParams } from "react-router-dom";
import SubHeader from "../../components/SubHeader";


const EditarObra = () => {
    
  
    const {id}= useParams();
    
    
    return(<div>
       
       
       <SubHeader title={'Editar Obra'} />





    </div>)
}

export default EditarObra;


