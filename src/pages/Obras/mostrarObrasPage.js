import { useEffect, useState } from "react";
import SubHeader from "../../components/SubHeader";
import TableObras from "../../components/tables/tableObras.component";
import serviceObra from "../../services/obra.service";
import Pagination from "react-js-pagination";
import { useHistory } from "react-router-dom";



const ListarObras = () => {
  
    const [obras, setObras] = useState([]);
    const [page, setPage] = useState({
        totalItems: '',
        current_page:'',
        per_page:''
    })
    const history = useHistory();

    const redirigir = (slug) => {
        history.push('/editarobra/'+ slug);
    }

    const eliminar = async (id) => {
        console.log(id);
        await serviceObra.useDeleteObra(id).then(res => {
            console.log(res)
            traerObras();
        }).catch(err => {
            console.log(err.response);
        })

       
    }

    useEffect(() => {
        traerObras();
    },[])

    const traerObras = async(pageNumber = 1) => {

        const url = '?page='+pageNumber;

        await serviceObra.useCatalogo(url).then(res => {
            setObras(res.data.data);
            setPage({
                totalItems: res.data,
                current_page: res.data,
                per_page: res.data
            })
        })

    }



    return(<div>
        
        
        <SubHeader title={'Obras'}/>

        <div className="Container pt-5 py-5">
            
            <div className="row">

                    <div className="col-10 offset-1">

                      <TableObras obras={obras} redirigir={redirigir} eliminar={eliminar} />

                    </div>

                    <div className="column one pager_wrapper" >
                    <div className="pager">
                    <div className="pages">
                                <Pagination
                                    activePage={page.current_page.current_page ? page.current_page.current_page : 0}
                                    itemsCountPerPage={page.per_page.per_page ? page.per_page.per_page : 0 }
                                    totalItemsCount={page.totalItems.total ? page.totalItems.total : 0}
                                    onChange={(pageNumber) => {
                                        traerObras(pageNumber)
                                    }}
                                    pageRangeDisplayed={8}
                                   
                                    itemClassFirst="prev_page"
                                    itemClassPrev="anterior"

                                   

                                    linkClassPrev="ante"
                                    itemClassNext="siguiente"
                                    itemClassLast="next_page"
                                    activeLinkClass="page active"
                                    
                                />
                           
                           </div>
                           
                           </div>
                           
                    </div>


            </div>

          

        </div>
        
        

    </div>)


} 


export default ListarObras;