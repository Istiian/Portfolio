import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SkillsSection(){
    return(
        <div>
            <Container fluid="md">
                <Row>
                    <Col>Languages</Col>
                    <Col>Database</Col>
                </Row>
                <Row>
                    <Col>Frameworks & Libraries</Col>
                    <Col>Tools</Col>
                </Row>
            </Container>
        </div>
        
    )
}