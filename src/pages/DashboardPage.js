import useAuth from "../auth/useAuth";

export default function DashboardPage() {

    const auth = useAuth();


    
    return (
        <div>
            <h1>DashboardPage</h1>


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
