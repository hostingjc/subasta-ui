import AuthProvider from "./auth/AuthProvider";

import useScript from "./hooks/useScript";

import AppRouter from "./routers/AppRouter";
import jQuery from 'jquery';


import './assets/wp-content/plugins/LayerSlider/static/layerslider/css/layerslider2cfc.css';
import './assets/wp-includes/css/dist/block-library/style.minfb16.css?ver=5.2.11';
import './assets/wp-content/plugins/contact-form-7/includes/css/styles58e0.css?ver=5.1.4'; 

 import './assets/wp-content/themes/betheme/stylee17d.css?ver=20.9.5.1'; 
 import './assets/wp-content/themes/betheme/css/basee17d.css?ver=20.9.5.1'; 
 import './assets/wp-content/themes/betheme/css/layoute17d.css?ver=20.9.5.1'; 
import './assets/wp-content/themes/betheme/css/shortcodese17d.css?ver=20.9.5.1'; 
import './assets/wp-content/themes/betheme/assets/animations/animations.mine17d.css?ver=20.9.5.1'; 
import './assets/wp-content/themes/betheme/assets/ui/jquery.ui.alle17d.css?ver=20.9.5.1';
import './assets/wp-content/themes/betheme/assets/jplayer/css/jplayer.blue.mondaye17d.css?ver=20.9.5.1'; 
import './assets/wp-content/themes/betheme/css/responsivee17d.css?ver=20.9.5.1'; 
import './assets/style1.css';
import { useEffect } from "react";


function App() {




  useEffect(() => {
    document.body.className = 'page-template page-template-template-portfolio page-template-template-portfolio-php page page-id-39  color-custom style-default button-flat layout-full-width if-zoom if-border-hide hide-love no-shadows header-classic header-fw header-boxed minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-link-color menuo-right menuo-no-borders mobile-tb-hide mobile-mini-mr-ll tablet-sticky mobile-sticky be-reg-20951 wpb-js-composer js-comp-ver-6.0.2 vc_responsive';
    return () => { document.body.className = ''; }
  });



  useScript('https://autismoenvozalta.com/cosas/assets/inicializador.js');
  window.jQuery = jQuery;
  useScript('https://autismoenvozalta.com/cosas/assets/wp-includes/js/jquery/jquery4a5f.js?ver=1.12.4-wp');
   useScript('https://autismoenvozalta.com/cosas/assets/wp-includes/js/jquery/jquery-migrate.min330a.js?ver=1.4.1');


  useScript('https://autismoenvozalta.com/cosas/assets/wp-content/plugins/contact-form-7/includes/js/scripts58e0.js');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-includes/js/jquery/ui/core.mine899.js?ver=1.11.4');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-includes/js/jquery/ui/widget.mine899.js?ver=1.11.4');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-includes/js/jquery/ui/mouse.mine899.js?ver=1.11.4');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-includes/js/jquery/ui/sortable.mine899.js?ver=1.11.4');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-includes/js/jquery/ui/tabs.mine899.js?ver=1.11.4');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-includes/js/jquery/ui/accordion.mine899.js?ver=1.11.4');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-content/themes/betheme/js/pluginse17d.js?ver=20.9.5.1');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-content/themes/betheme/js/menue17d.js?ver=20.9.5.1');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-content/themes/betheme/assets/animations/animations.mine17d.js?ver=20.9.5.1');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-content/themes/betheme/assets/jplayer/jplayer.mine17d.js?ver=20.9.5.1');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-content/themes/betheme/js/parallax/translate3de17d.js?ver=20.9.5.1');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-content/themes/betheme/js/parallax/smoothscrolle17d.js?ver=20.9.5.1');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-content/themes/betheme/js/scriptse17d.js?ver=20.9.5.1');
  useScript('https://autismoenvozalta.com/cosas/assets/wp-includes/js/wp-embed.minfb16.js?ver=5.2.11');

  return (
    
      <AuthProvider>
        <AppRouter />

        
     
      </AuthProvider>
      



 
  );


 
  

}

export default App;
