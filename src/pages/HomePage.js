import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import serviceObra from '../services/obra.service';
import './../assets/subheader.css'
import SubHeader from '../components/SubHeader';
import './../assets/catalogo.css'
import Pagination from "react-js-pagination";


export default function HomePage() {

    const [obras, setObras] = useState([]);
    const RutaImagenDestacada = 'http://subasta.com/img/winwardialeviosa/destacadas/';
    const [page, setPage] = useState({
        totalItems: '',
        current_page: '',
        per_page: ''
    })
      
    
    
    const traerDatos = async (pageNumber = 1) => {

        const url = '?page='+pageNumber;

        await serviceObra.useCatalogo(url).then(res => {
            console.log(res.data.data);
                  setObras(res.data.data)
                  setPage({
                    totalItems: res.data,
                    current_page: res.data,
                    per_page: res.data
                })
          }).catch(err => {

          console.log(err.response);

      })

      } 
    

    
    
    
    
    
    
    useEffect(() => {
      
        traerDatos();

    },[]);

      
    var lis = [];

    for (var i in obras) {
        lis.push(<li>{obras[i].autor}</li>);
    }
    
   


    return (
        <div>

<SubHeader title={'Catalogo de la Subasta'}/>





<div id="Content">
	<div className="content_wrapper clearfix">

		{/*<!-- .sections_group -->*/}
		<div className="sections_group">

		
			
			
				<div className="extra_content">
					<div className="section the_content no_content"><div className="section_wrapper"><div className="the_content_wrapper"></div></div></div>				</div>
				
				
				
			
				<div className="section ">
					<div className="section_wrapper clearfix">
	
						<div className="column one column_portfolio">	
						


                        <div class="grid">

                         
                            
{
        
        
            Object.keys(obras).map((oneKey,i)=>{
              return (

                <NavLink  key={i} exact to={'/obra/'+ obras[oneKey].id} rel="noopener noreferrer" class="galleryItem" >
                         

                  
  <div class="grid__item zoom">
      <img className="img-fluid" src={RutaImagenDestacada+obras[oneKey].imagen_destacada}/>
      </div>


                
                </NavLink>


            


                   
              
                )
            })
          
        }


</div>

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


							</div></div></div></div></div></div>



                            

        
 
                    
        </div>
    )
}
