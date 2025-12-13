import styling from "../styles/ContactSection.module.css";

export default function SkillsSection() {
    return (
        <div className={styling.contactSection} id="contact">
            <h2 className={styling.heading}>Let's Work Together</h2>
            <p className={styling.desc}>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
            <p className={styling.contacts}><span>markchristianforlaje@gmail.com</span> | <span>09451360745</span></p>
            <div className={styling.iconLinks}>
                <a href="https://github.com/Istiian"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/m-christian-forlaje/"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>
    )
}