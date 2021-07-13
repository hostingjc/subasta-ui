

const TableObrasEliminadas = (props) => {

    console.log(props)

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
                  <button onClick={() => props.RestaurarObra(obra.id)}>Restaurar</button>
                </td>
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

export default TableObrasEliminadas;