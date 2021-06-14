import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

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
        <a id="logo" href="../index.html" title="Subasta en Voz Alta" data-height="120" data-padding="15">
          <img className="logo-main scale-with-grid" src="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-retina="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-height="" alt="" />
          <img className="logo-sticky scale-with-grid" src="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-retina="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-height="" alt="" />
          <img className="logo-mobile scale-with-grid" src="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-retina="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-height="" alt="" />
          <img className="logo-mobile-sticky scale-with-grid" src="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-retina="https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png" data-height="" alt="" />
          </a>
      </div>	










      <div className="menu_wrapper">
        <nav id="menu"><ul id="menu-menu" className="menu menu-main"><li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home"><a href="../index.html"><span>Inicio</span></a></li>
<li id="menu-item-100" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="../introduccion/index.html"><span>Introducción</span></a></li>
<li id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item"><a href="index.html"><span>Catálogo</span></a></li>
<li id="menu-item-223" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="../artistas/index.html"><span>Artistas</span></a></li>
<li id="menu-item-227" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="../condiciones/index.html"><span>Condiciones</span></a></li>
<li id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="../precios/index.html"><span>Precios/Ofertar</span></a></li>
</ul></nav>

<a className="responsive-menu-toggle " href="#"><i className="icon-menu-fine"></i></a>					
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