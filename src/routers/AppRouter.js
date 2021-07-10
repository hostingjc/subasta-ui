import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPage from "../pages/ForgotPage";
import ResetPage from "../pages/ResetPage";
import CategoriesRouter from "./CategoriesRouter";
import AvisoRevisionPage from "../pages/AvisoRevisionPage";
import AvisoEmailResetPage from "../pages/AvisoEmailResetPage";
import AuthVerify from '../components/AuthVerify.component';
import AprobarUsersPage from "../pages/AprobarUsersPage";
import ObraDetails from "../pages/Obras/obraDetails.page";
import ListarObras from "../pages/Obras/mostrarObrasPage";
import EditarObra from "../pages/Obras/editObraPage";
import RestaurarObras from "../pages/Obras/restaurarObrasPage";

import Footer from "../components/Footer";


import CreaObraPage from "../pages/Obras/crearObraPage";

export default function AppRouter() {


  return (
    <Router>
      <Navbar />
      <Switch >

        <Route exact path="/" component={HomePage} />
        

        {/* Rutas de Autenticacion  */}
        <PublicRoute exact path="/forgot" component={ForgotPage}/>
        <PublicRoute exact path="/reset/:token" component={ResetPage}/>
        <PublicRoute exact path="/email-reset" component={AvisoEmailResetPage} />
        <PublicRoute exact path="/revision" component={AvisoRevisionPage} />
        <Route exact path="/signin">
          <Redirect to="/login" />
        </Route>
        <PublicRoute exact path="/login" component={LoginPage} />
        <PublicRoute exact path="/register" component={RegisterPage} />
        {/*--------------------------------------- */}  



         {/* Rutas de Obra */} 
        
        <Route exact path="/obra/:id" component={ObraDetails} />
        <PrivateRoute exact path="/crearObra" component={CreaObraPage}/>
        <PrivateRoute exact path="/listarobras" component={ListarObras} />
        <PrivateRoute exact path="/editarobra/:id" component={EditarObra} />
        <PrivateRoute exact path="/restaurarobras" component={RestaurarObras} />


         {/*--------------------------------------- */} 


        {/* Rutas Gestion de Usuarios */}
        <PrivateRoute exact path="/solicitudes" component={AprobarUsersPage} />
        

        {/* -------------------------------- */}


        <Route exact path="/profile/:username" component={ProfilePage} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/payments" component={PaymentsPage} />
        






        <Route path="/categories" component={CategoriesRouter} />
        <Route exact path="/about"  component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />


        <Route path="/404" component={NotFoundPage} />
      
        <Route path="*">
          <Redirect to="/404" />
        </Route>

        
      </Switch>

     <AuthVerify/>  
   
   
  <Footer/>
    </Router>
  



  );
}


