import mono from './../assets/img/mono.gif'
import SubHeader from "../components/SubHeader";
const imgStyles = {
    width: '450px',
    heght: '450px',
  };


export default function NotFoundPage() {
    return (
        <div>

<SubHeader title={'404 - La Pagina no Existe'}/>
          

            <div className="container mt-3 py-5">
  <div className="row">
    <div className="col-4 offset-3 justify-content-md-center text-right">
    

            <img src={mono} style={imgStyles} alt="Mono"  />

        </div></div></div>

        </div>
    )
}
