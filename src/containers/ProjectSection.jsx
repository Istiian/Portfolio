import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import styling from "../styles/ProjectSection.module.css";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
export default function ProjectSection() {

    const Projects = [
        {
            id: 1,
            name: "Student Helpdesk System",
            description:
                "A support service website that handles and solves students' queries regarding their questions and concerns.",
            devTools: ["PHP", "CSS", "Javascript", "MySQL", "Bootstrap"],
            image: Project1,
            link: "https://github.com/Istiian/Student-Helpdesk-System",
        },
        {
            id: 2,
            name: "Meowtinik",
            description:
                "A math-based responsive website that offers calculators.",
            devTools: ["Express JS", "CSS", "Javascript", "Bootstrap"],
            image: Project2,
            link: "https://github.com/Istiian/Meowtinik",
        },
        {
            id: 3,
            name: "GeoQuest",
            description:
                "An educational website focused on geography. It offers resources, information, and a quiz generator.",
            devTools: ["Express JS", "CSS", "Javascript", "MongoDB", "Bootstrap"],
            image: Project3,
            link: "https://github.com/Istiian/Quiz_Game",
        },

    ]


    return (
        <div className={styling.projectSection} id="projects">
            <h2 className={styling.projectSectionHeading}>Featured Projects</h2>

            <div className={`${styling.cardContainer}`}>
                {Projects.map((project) => (
                    <Card className={styling.cards} key={`Project-${project.id}`}>
                        <Card.Img variant="top" src={project.image} className={styling.cardImg} />
                        <Card.Body>
                            <Card.Title className={styling.projectTitle}>{project.name}</Card.Title>
                            <Card.Text className={styling.projectDesc}>{project.description}</Card.Text>

                            <Card.Text className={styling.devTools}>
                                {project.devTools.map((tool, index) => (
                                    <span className={styling.devTools} key={`Project-${project.id}-devTool-${index}`}>{tool}</span>
                                ))}
                            </Card.Text>
                            <Button variant="outline-primary" className={styling.githubBtn} onClick={() => window.open(project.link, "_blank")} > View Project</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    )
}