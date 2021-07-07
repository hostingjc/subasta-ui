import serviceUser from '../services/user.service';
import { Fragment, useEffect, useState } from 'react';

import $ from 'jquery';
//import 'datatables.net-bs5'
//import dt from 'datatables.net';

import DataTable from 'datatables.net'

$.DataTable = DataTable



export default function TableUsersRevision(props){




    const [records, setRecords] = useState('');
    const [loading, setLoading] = useState(true);
    const [datos, setDatos] = useState('');

    useEffect(() => {

        setRecords(props.users);
        setDatos($('#table_id').DataTable({
            data: records, //option 1
            // data: this.getUsersData1(), //option 2
            columns: [
              { title: "Name", data: "name" },
            ]
          }))
     
    
         
    
        setTimeout(() => {
           // setLoading(false);     
        }, 3000);
    
      
    })
       
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

  


return(
<table id="table_id" className="display" ref={datos} />
   
   


)


}