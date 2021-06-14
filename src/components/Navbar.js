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
        <nav id="menu">
          <ul id="menu-menu" className="menu menu-main">
          <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
        <NavLink exact to="/" activeClassName="active">
           <span> Home</span>
          </NavLink></li>
<li id="menu-item-100" className="menu-item menu-item-type-post_type menu-item-object-page">
<NavLink exact to="/about" activeClassName="active">
<span>   About </span>
          </NavLink></li>
<li id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item">
<NavLink exact to="/contact" activeClassName="active">
<span>  Contact  </span>
          </NavLink></li>
<li id="menu-item-223" className="menu-item menu-item-type-post_type menu-item-object-page">
<NavLink to="/categories" activeClassName="active">
<span>         Categories </span>
          </NavLink></li>
<li id="menu-item-227" className="menu-item menu-item-type-post_type menu-item-object-page">
<NavLink to="/categories" activeClassName="active">
<span>   Categories</span>
          </NavLink></li>
<li id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page">
<NavLink to="/categories" activeClassName="active">
<span>    Categories </span>
          </NavLink>
  </li>
</ul>

</nav>

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
