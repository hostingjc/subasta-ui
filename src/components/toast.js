import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)



const toast  = MySwal.fire({
    toast: true,
    timer: 60000,
    position: 'top-end',
showConfirmButton: false,
 
  });




export const mytoast = (type,title)=> toast({
  type,
  title
})