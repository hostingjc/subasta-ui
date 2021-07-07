import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

import './../index.css';


export default function Navbar() {
  const auth = useAuth();


  return (



    
<div id="Wrapper">
      <div id="Header_wrapper" >
   


       
 
<header id="Header">
      



<div className="header_placeholder"></div>

<div id="Top_bar" className="loading">

<div className="container">
  <div className="column one">
  
    <div className="top_bar_left clearfix">

      <div className="logo">
        <NavLink id="logo" exact to={'/'} title="Subasta en Voz Alta" data-height="120" data-padding="15">
          <img className="logo-main scale-with-grid" src="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-retina="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-height="" alt="" />
          <img className="logo-sticky scale-with-grid" src="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-retina="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-height="" alt="" />
          <img className="logo-mobile scale-with-grid" src="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-retina="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-height="" alt="" />
          <img className="logo-mobile-sticky scale-with-grid" src="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-retina="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-height="" alt="" />
          </NavLink>
      </div>	

  
     


      <div className="menu_wrapper">
        <nav id="menu">
          <ul id="menu-menu" className="menu menu-main">
          <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
        <NavLink exact to="/" onClick={  window.scrollTo(0, 0) } activeClassName="current_page_item">
           <span >Catalogo</span>
          </NavLink>
          
  
          
          </li>
<li id="menu-item-100" className="menu-item menu-item-type-post_type menu-item-object-page  " >
<NavLink exact to="/about" activeClassName="current_page_item">
<span>   About </span>
          </NavLink></li>
<li id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page  ">
<NavLink exact to="/contact" activeClassName="current_page_item">
<span>  Contact  </span>
          </NavLink></li>
<li id="menu-item-223" className="menu-item menu-item-type-post_type menu-item-object-page ">
<NavLink to="/categories" activeClassName="current_page_item">
<span>         Categories </span>



          </NavLink>
          </li>

          {!auth.isLogged() && (
          <>
           <li id="menu-item-227" className="menu-item menu-item-type-post_type menu-item-object-page">
              <NavLink exact to="/login" activeClassName="current_page_item">
              <span>Login</span>
              </NavLink>
            </li>
            <li id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page">
              <NavLink exact to="/register" activeClassName="current_page_item">
              <span>Register</span>
              </NavLink>

              

            </li>
          </>
        )}

<li id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children  submenu">
  
{auth.isLogged() && (
            <>   
              <NavLink exact to='/#' activeClassName="current_page_item">
              <span>Obras</span> 

                      
                
              </NavLink>
 </>
     )}  

 
<ul className="sub-menu">
     <li id="menu-item-769"  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39  last-item">

<NavLink exact to='/crearObra' activeClassName="current_page_item">
     <span>Crear </span>
 </NavLink>

</li>  

</ul>

<span className="menu-toggle"></span>
</li>   
                   
 <li id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children  submenu">
             
             
 {auth.isLogged() && (
            <>   
              <NavLink exact to="/dashboard" activeClassName="current_page_item">
              <span>Dashboard</span> 

                      
                
              </NavLink>
 </>
        
        
 )}


 
<ul className="sub-menu">
 
 
   


<li id="menu-item-769"  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39  last-item">

<NavLink exact to='/solicitudes' activeClassName="current_page_item">
     <span>solicitudes</span>
 </NavLink>

</li>


<li id="menu-item-769"  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39  last-item">

<NavLink exact to='/payments' activeClassName="current_page_item">
     <span>payments</span>
 </NavLink>

</li>
       
   

  

 </ul>
    
<span className="menu-toggle"></span>

            </li>


            
    


  




    
         {auth.isLogged() && (
          <>
           

    
            <li id="menu-item-99" className="menu-item menu-item-type-post_type menu-item-object-page">
              <NavLink exact to="/payments" activeClassName="current_page_item">
              <span>Payments</span> 
              </NavLink>
            </li>
            <li id="menu-item-98" className="menu-item menu-item-type-post_type menu-item-object-page">
            <NavLink  exact to="/login" activeClassName="current_page_item">
             <span onClick={auth.logout}>Salir</span> 
             </NavLink>
            </li>
          </>
        )}
    



</ul>

</nav>

<NavLink to={'#'} className="responsive-menu-toggle " >
  
  <i className="icon-menu-fine"></i>
  
  </NavLink>					
    
  
    
      </div>	



      
      <div className="secondary_menu_wrapper">
   
                </div>
      
      <div className="banner_wrapper">
                </div>
      
      <div className="search_wrapper">
     
        
        
				
      </div>				
      
    </div>
    
          
  </div>
</div>
</div>							



</header>


</div>

</div>


  );
}
