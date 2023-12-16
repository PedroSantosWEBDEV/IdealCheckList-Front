import Swal from "sweetalert2"

const AlertBoostrapButtons = Swal.mixin({
    customClass: {
      popup: 'bg-body',
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
})

export {AlertBoostrapButtons}