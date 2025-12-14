import styling from "../styles/LandingSection.module.css";
import Button from 'react-bootstrap/Button';
import myPic from "../assets/Me.png"

export default function LandingSection(){
    return(
        <div className={`row ${styling.landingSection}`} id="landing">
            <div className={`col-12 col-lg-7 px-auto`} style={{paddingTop:"100px"}}>
                <small  className={styling.greetings}>Welcome</small>
                <h1 className={styling.header}>Mark Christian Forlaje</h1>
                <p className={styling.desc}>I develop responsive web applications that offers innovative solutions. 
                I'm currently pursuing BS Information Technology at City of Malabon University with a passion for building seamless digital experiences.  </p>
                
                <Button onClick={()=>{window.open("https://github.com/Istiian", "_blank")}} variant="primary" size="lg" className={styling.GithubBtn}><i className="fa-brands fa-github" style={{color:"#2c2c2c"}}></i> Github</Button>
            </div>
            <div className={`col-12 col-lg-5 d-flex  justify-content-center`} style={{}}>
                <img src={myPic} alt="My Picture" className={`${styling.mypic} d-none d-lg-block`} />
            </div>
            
        </div>
    )
}