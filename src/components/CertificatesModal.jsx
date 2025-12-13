import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CertificatesModal({Name,Image}) {
    return(
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            {Name}
        </Modal.Title>
        <Modal.Body>
            <img src={Image} alt={Name} style={{width: '100%'}}/>
        </Modal.Body>
        </Modal.Header>
      </Modal>
    )
}