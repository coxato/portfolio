import swal from 'sweetalert2';

const confirmationMessage = ({
    title = 'Quiere eliminar?',
    text = 'una vez hecho no puede revertir esta acción',
    confirmText = 'Si, eliminar',
    cancelText = 'No, cancelar'
}) => {
    return swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmText,
        cancelButtonText: cancelText
    })
}

// success and error
const showSuccessMessage = ({title = 'Procedimiento exitoso', text = '', html = ''}) => {
    return swal.fire({
        title,
        text,
        html,
        icon: 'success',
    })
}

const showErrorMessage = ({title = 'Ocurrió un error', text = '', html = ''}) => {
    return swal.fire({
        title,
        text,
        html,
        icon: 'error',
    })
}

const showWarningMessage = ({title = 'Alto allí', text = '', html = ''}) => {
    return swal.fire({
        title,
        text,
        html,
        icon: 'warning',
    })
}


/**
 * show sweetalert2 loading spinner
 * @param title
 * @param text
 */
const showLoading = ({title = '', text = ''}) => {
    return swal.fire({
        title,
        text,
        onOpen: () => swal.showLoading()
    })
}

/**
 * hide sweetalert2 loading spinner
 */
const hideLoading = () => {
    return swal.close();
}

export {
    showLoading,
    hideLoading,
    confirmationMessage,
    showSuccessMessage,
    showErrorMessage,
    showWarningMessage
}