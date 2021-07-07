
import ReactDatatable from '@ashvin27/react-datatable';
import { Fragment, useEffect, useState } from 'react';

//import "bootstrap/dist/css/bootstrap.min.css";


//import "bootstrap/dist/js/bootstrap.bundle.min";

//import './../assets/dataTables.bootstrap5.min.css'
//import './../assets/tableCustom.css';
import serviceUser from '../services/user.service';

export default function TablePorAprobar(props){




   const [records, setRecords] = useState('');
   const [loading, setLoading] = useState(true);
    
   const aprobarRecord = (record, index) => {
    console.log("Aprobar Usuario", index, record);

    console.log(record.id);

    serviceUser.useAprobar(record.id).then(
        res => {
            console.log(res.data)
        }
    ).catch(error => {
        console.log(error.response)
    });

}

    const deleteRecord = (record, index) => {
    console.log("Delete record", index, record);
}


   const columns = [
        {
            key: "name",
            text: "Name",
            className: "name",
            sortable: true
        },
        {
            key: "email",
            text: "Email",
            className: "email",
            sortable: true
        },
        {
            key: "action",
            text: "Action",
            cell: (record, index) => {
                return (
                    <Fragment>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={aprobarRecord.bind(this, record, index)}
                            style={{marginRight: '5px'}}>
                                Aprobar
                        </button>
                        <button 
                            className="btn btn-danger btn-sm" 
                            onClick={deleteRecord.bind(this, record, index)}>
                                Eliminar
                        </button>
                    </Fragment>
                );
            }
        }
    ];

    const table_filter = {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: '5px',
        width: '100%'
      }


    const config = {
        page_size: 10,
        length_menu: [10, 20, 50],
        show_filter: true,
        show_pagination: true,
        pagination: 'basic',
        
        language: {
            loading_text: "Please be patient while data loads...",
            length_menu: "Mostrar _MENU_ registros por página",
            filter: "Buscar en registros ...",
            info: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
            pagination: {
                first: "Primero",
                previous: "Previa",
                next: "próximo",
                last: "Última"
            }
        }
    }


  
    useEffect(() => {
        
        setRecords(props.users);

        setTimeout(() => {
            setLoading(false);     
        }, 3000);

      
    })

      






    return( <Fragment>

    <ReactDatatable  className="custom-style-table"
                tHeadClassName="custom-header-style" config={config} records={records} columns={columns}
              loading={loading} style={{   display: 'inline-block',
              verticalAlign: 'top',
              marginRight: '5px',
              width: '100%'}} />
      

      </Fragment>)

   

} 