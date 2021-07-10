import { useEffect, useState } from 'react';
import './../assets/footer.css';
import logo_autismo from './../assets/wp-content/uploads/2019/10/LOGO-AUTISMO-negro-mediano-02.png'


export default function Footer(){

    const [fecha, setFecha] = useState('');

    useEffect(()=>{

        setFecha(new Date().getFullYear());

    },[])

    return(
    
    
    
    <footer id="Footer" className="clearfix">



		
    <div className="widgets_wrapper" >
      
        
        
        <div className="container">
            <div className="column one">
                <aside id="custom_html-2" className="widget_text widget widget_custom_html">
                    <div className="textwidget custom-html-widget">
                        <div className="divcentrador1" >


<hr className="no_line hr-custom1"/>


<img src ={logo_autismo} alt={'logo_autismo'} />

<hr className="no_line hr-custom2" />

<p>
Autismo en Voz Alta {fecha} RIF. J-31538323-3<br /> 
</p>
<ul className="social" >
    <li className="facebook" >
        <a href="https://www.facebook.com/Fundación-AUTISMO-EN-VOZ-ALTA-199338660137029/" title="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="icon-facebook" ></i></a></li>
    <li className="twitter">
        <a href="https://twitter.com/AenVozAlta?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="icon-twitter" ></i></a></li>
    <li className="instagram" >
        <a href="https://www.instagram.com/autismoenvozalta/" title="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="icon-instagram" ></i></a></li>
</ul>
</div></div></aside></div></div></div>
    
        <div className="footer_copy">
            <div className="container">
                <div className="column one">

                    
                   {/* <!-- Copyrights --> */}
                    <div className="copyright">
                        © {fecha} Subasta en Voz Alta | Todos los derechos reservados | Diseño web: <a href="laimagenweb.html" className="sitioLiw" ><i className="icon-network"></i>La Imagen Web, C.A.</a>						</div>

                    <ul className="social"></ul>
                </div>
            </div>
        </div>

    
    
</footer>)
    
}