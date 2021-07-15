

const TableObras = (props) => {

    

    return(<table>

        <thead>
            <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Acciones</th>
            </tr>
        </thead>

        <tbody>

            {props.obras.length > 0 ? (
                props.obras.map((obra) => (
            <tr key={obra.id} >
                <td>{obra.titulo}</td>
                <td>{obra.autor}</td>
                <td>
                  <button onClick={() => props.redirigir(obra.slug)}>Editar</button>
                  <button onClick={(e) => props.eliminar(obra.id)}>Eliminar</button>
                </td>b
            </tr>
                )
            )) : (
                <tr>
                <td colSpan={3}> No hay Obras</td>
                </tr>  
            )
            }
        </tbody>


    </table>);


}  

export default TableObras;