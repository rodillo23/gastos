import cerrarBtn from '../img/cerrar.svg'

export const Modal = ({setModal}) => {

    const ocultarModal = () => {
        setModal(false)
    }

  return (
    <div  className='modal'>
        <div className="cerrar-modal">
            <img 
                src={cerrarBtn} 
                alt="cerrar modal" 
                onClick={ocultarModal}
            />
        </div>
    </div>
  )
}
