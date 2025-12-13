import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CertModal from '../components/CertificatesModal.jsx';
import styling from '../styles/CertificationSection.module.css';

export default function ContactSection(){
    // const [modalShow, setModalShow] = React.useState(false);

    const Certifications =[
        {
            id: 1,
            name: "Web Development Fundamentals",
            issuer: "Sololearn",
            year: "2023",
        },
        {
            id: 2,
            name: "JavaScript Intermediate",
            issuer: "Sololearn",
            year: "2024",
        },
    ]
    const trainings =[
        {
            id: 1,
            name: "The Power of Now: Unveiling Today's Technological Breakthroughs",
            issuer: "College of Computer Studies - City of Malabon University",
            year: "2025",
        },
        {
            id: 2,
            name: "Hour of Code",
            issuer: "ASEAN Foundation",
            year: "2025",
        },
        {
            id: 3,
            name: "Prototyping and Design Handoff in Agile Mobile App Development",
            issuer: "DICT Region V - Bicol ",
            year: "2025",
        },
    ]

    return(
        <div className={styling.certificateSection} id="certifications">
            <h2 className={styling.sectionHeading}>Certifcations & Trainings</h2>
            <Container fluid="md">
                <Row>
                    <Col>
                        <h3 className={styling.subheading}>Certifications</h3>
                        <ul>
                            {Certifications.map((cert) => (
                                <>
                                <li key={`Certficate-${cert.id}-Name`} className={styling.itemName}>{cert.name}</li>
                                <li key={`Certficate-${cert.id}-Info`} className={styling.itemInfo}>{`${cert.issuer}, ${cert.year}`}</li>
                                </>
                            
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <h3 className={styling.subheading} >Trainings & Seminars</h3>
                        <ul>
                            {trainings.map((training) => (
                                <>
                                <li key={`Training-${training.id}-Name`} className={styling.itemName}>{training.name}</li>
                                <li key={`Training-${training.id}-Info`} className={styling.itemInfo}>{`${training.issuer}, ${training.year}`}</li>
                                </>
                            
                            ))}
                        </ul>
                    </Col>
                </Row>

                
            </Container>
        </div>
        

    )
}