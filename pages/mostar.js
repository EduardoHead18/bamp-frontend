import { useState } from 'react'
import Modal from '@/components/modals/modal'
function MyPage() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <div>
      {/* botón para abrir el modal */}
      <button onClick={handleOpenModal}>Mostrar modal</button>

      {/* modal */}
      {isModalVisible && (
        <Modal
          title="Título del modal"
          onClose={handleCloseModal}
        >
          {/* contenido del modal */}
          <p>Este es el contenido del modal.</p>
        </Modal>
      )}
    </div>
  )
}

export default MyPage
