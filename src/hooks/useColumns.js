import { useMemo } from "react";

function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id }
}) {
  // Calculate the min and max
  // using the preFilteredRows

  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={(e) => {
          setFilter(parseInt(e.target.value, 10));
        }}
      />
      <button onClick={() => setFilter(undefined)}>Off</button>
    </>
  );
}

export default function useColumns() {

    const AddButtonToCell = (cell) =>{
        return(<button value={cell} >
          fff
        </button>)
        }    


  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Delete",
        id:'delete',
        accessor: str => "delete",
    
        Cell: (row)=> (
        <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
              onClick={() => {
              
                  console.log(row.id);
                // row.splice(row.index, 1)
             
                }}>
                  Delete
                </span> 
        )},
      {
        Header: "Año",
        accessor: "anio",
        Filter: SliderColumnFilter,
        filter: "equals"
      }
    ],
    []
  );

  return columns;
}
