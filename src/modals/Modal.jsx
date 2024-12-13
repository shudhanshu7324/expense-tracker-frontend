import './Modal.css'
const Modal = ({setModal}) => {
    const onClose = () => {
        setModal(false)
    }

  return (
    <div className='modal'>
      <button style={{position:"absolute", left:"90%", top:"5%"}} onClick={onClose}>Close</button>
    </div>
  )
}

export default Modal
