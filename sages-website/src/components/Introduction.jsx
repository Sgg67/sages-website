import sagePic from './images/sage-pic.jpg';
import './introduction.css'; 

const Introduction = () => {
    return (
        <section className="intro-section">
            <div className="intro-container">
                <div className="intro-text">
                    <h1 className="intro-title">Hello, I am <span className="highlight">Sage</span></h1>
                    <h2 className="intro-subtitle">
                        Computer Science Senior at the University of Pittsburgh
                    </h2>
                    
                    <div className="intro-description-card">
                        <p className="intro-description">
                            Passionate full-stack developer dedicated to creating clean, efficient web solutions. 
                            I enjoy transforming complex problems into intuitive, user-friendly applications 
                            through modern web technologies and best practices.
                        </p>
                        
                        <p className="intro-description">
                            Currently pursuing my Bachelor's degree while actively developing practical web applications 
                            that demonstrate both technical proficiency and creative problem-solving.
                        </p>
                    </div>
                    
                    <div className="skills-preview">
                        <span className="skill-tag">Web Development</span>
                        <span className="skill-tag">Full-Stack</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Problem Solving</span>
                    </div>
                </div>
                
                <div className="profile-image-container">
                    <img 
                        src={sagePic} 
                        alt="Sage - Computer Science Student at University of Pittsburgh" 
                        className="profile-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default Introduction;