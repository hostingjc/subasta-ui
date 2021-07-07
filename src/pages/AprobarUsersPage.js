import React, { useEffect, useRef, useState } from "react"
import serviceUser from "../services/user.service"
import SubHeader from "../components/SubHeader"
//import TablePorAprobar from './../components/table.usersPorAprobar.component';
import TablaUsers from "../components/TablaUsers.component";
//import TableUsersRevision from "../components/TabletUsersRevision.component"
import './../assets/table.css';
import Pagination from "react-js-pagination";
import './../assets/paginacion.css'

export default function AprobarUsersPage() {

    const [users, setUsers] = useState('');

    /*
    const [state, setData] = useState({
        users: ''
    });*/

    const [page, setPage] = useState({
        totalItems: '',
        current_page: '',
        per_page: ''
    })
   
    const traerDatos = async (pageNumber = 1) => {

        const url = '?page='+pageNumber;

        await serviceUser.useUsersPorAprobar(url).then(res => {
            
            console.log(res.data)
           
            setUsers(res.data.data);
            setPage({
                totalItems: res.data,
                current_page: res.data,
                per_page: res.data
            })
         
        })

      } 

   
      useEffect(async () => {

      
        traerDatos();
     
      }, []);

   


    
      const deleteUser = (id) => {

        console.log(id);

        setUsers(users.filter((user) => user.id !== id))

        /*
        serviceUser.useAprobar(id).then(
            res => {
                console.log(res.data)
            
            }
        ).catch(error => {
            console.log(error.response)
        });

        */

      }


    return (


        <div>
               
            <SubHeader title={'Solicitudes'}/>




            <div className="container pt-4 py-4">
                <div className="row">
  


                <TablaUsers users={users} deleteUser={deleteUser} />


               <div className="column one pager_wrapper" >
                    <div class="pager">
                    <div class="pages">
                                <Pagination
                                    activePage={page.current_page.current_page ? page.current_page.current_page : 0}
                                    itemsCountPerPage={page.per_page.per_page ? page.per_page.per_page : 0 }
                                    totalItemsCount={page.totalItems.total ? page.totalItems.total : 0}
                                    onChange={(pageNumber) => {
                                        traerDatos(pageNumber)
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
            
       
        </div>

            






    )
}

