 
   <table>
   <thead>
     <tr>
       <th>Name</th>
       <th>Email</th>
       <th>Opciones</th>
     </tr>
   </thead>
   <tbody>
     {props.users.length > 0 ? (
       props.users.map((user) => (
         <tr key={user.id}>
           <td>{user.name}</td>
           <td>{user.email}</td>
           <td>
             <button className="button muted-button">Edit</button>
             <button className="button muted-button">Delete</button>
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
