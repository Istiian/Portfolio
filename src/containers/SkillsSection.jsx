import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styling from '../styles/SkillsSection.module.css';


export default function SkillsSection(){
    return(
        <div className={styling.SkillsSection} id='skills'>
            <h2 className={styling.sectionHeading}>Skills & Technologies</h2>
            <Container fluid="md">
                <Row className={` mb-5`}>
                    <Col>
                        <h3 className={styling.skillHeadings}>Languages</h3>
                        <div className={styling.skillsContainer}>
                            <span className={styling.skills}>HTML</span>
                            <span className={styling.skills}>CSS</span>
                            <span className={styling.skills}>JavaScript</span>
                            <span className={styling.skills}>PHP</span>
                            <span className={styling.skills}>Python</span>
                        </div>
                        
                    </Col>
                    <Col>
                        <h3 className={styling.skillHeadings}>Database</h3>
                        <div className={styling.skillsContainer}>
                            <span className={styling.skills}>MySQL</span>
                        </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className={styling.skillHeadings}>Frameworks & Libraries</h3>
                        <div className={styling.skillsContainer}>
                            <span className={styling.skills}>ReactJS</span>
                            <span className={styling.skills}>ExressJS</span>
                            <span className={styling.skills}>Bootsrap</span>
                        </div>
                        
                        
                    </Col>

                    <Col>
                        <h3 className={styling.skillHeadings}>Tools</h3>
                        <div className={styling.skillsContainer}>
                            <span className={styling.skills}>Git</span>
                            <span className={styling.skills}>Figma</span>
                        </div>
                        

                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}