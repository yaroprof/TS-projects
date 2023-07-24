import React from 'react';
import styled from '@emotion/styled'

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
`;


const Modal:React.FC<ModalProps> = ({imageUrl, onClose}) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalImage src={imageUrl} alt="Full-size Image" />
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal