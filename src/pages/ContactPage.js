import useAuth from "../auth/useAuth"
import SubHeader from "../components/SubHeader";

export default function ContactPage() {


    const auth = useAuth();

    return (
        <div>

            <SubHeader title={'ContactPage'}/>


            {auth.isLogged() && (
          <>
      <div className="d-grid gap-2">
               <button className="btn btn-primary" type="submit">Comprar</button>
         </div>
          </>
        )}




        </div>
    )
}
