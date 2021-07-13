import { useEffect, useState } from "react";
import SubHeader from "../../components/SubHeader"
import TableObrasEliminadas from "../../components/tables/tableObrasEliminadas.component";
import serviceObra from "../../services/obra.service";
import Pagination from "react-js-pagination";

const RestaurarObras = () => {

    const [obras, setObras] = useState([]);
    const [page, setPages] = useState({
        totalItems: '',
        current_page:'',
        per_page:''
    })

 

    useEffect(() => {
        traerObras();
    },[])

    const traerObras = async (pageNumber = 1) => {

        const url = '?page='+pageNumber;

        await serviceObra.useObrasEliminadas(url)
        .then(res => {
            console.log(res.data.data)
            setObras(res.data.data)
            setPages({
                totalItems: res.data,
                current_page: res.data,
                per_page: res.data
            })
        })
        .catch(err => {
            console.log(err.response);
        })
    }


    const RestaurarObra = (id) => {
        console.log(id);
    }

    return(<div>
            
            <SubHeader title={'Restaurar Obras'} />

            <div className="Container pt-5 py-5">
            
            <div className="row">
   

           
            <div className="col-10 offset-1">
            <TableObrasEliminadas obras={obras} RestaurarObra={RestaurarObra}/>           
            
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
        
        </div>);

}

export default RestaurarObras;