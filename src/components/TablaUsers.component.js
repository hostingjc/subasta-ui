
//import axios from "axios";
//import serviceUser from "../services/user.service"
//import DataTable from "react-data-table-component";
//import { useEffect, useState } from "react";

import { useState } from "react";


export default function TablaUsers(props){
     
    console.log(props.users.data);

    //const [usuarios, getUsuarios] = useState(props.users);


    return(


          <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.users.length > 0 ? (
        props.users.map((user) => (
      <tr key={user.id}>
     

        <td>{user.name}</td>
        <td>{user.email}</td>



        <td>
        <button className="button muted-button"   onClick={() => props.deleteUser(user.id)} >Aprobar</button>
          <button className="button muted-button" >Eliminar</button>
         
        </td>
      </tr>
    ))
    ) : (
      <tr>
        <td colSpan={3}>No users</td>
      </tr>
    )}

    </tbody>
  </table>




    )



}  