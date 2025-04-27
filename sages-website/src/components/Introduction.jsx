import sagePic from './images/sage-pic.jpg';
const Introduction = () => {
    return (
        <div className = "intro">
            <h1 id = "about">About Me</h1>
            <img src={sagePic} alt="" className="profile-image" />
            <p id = "about-info">Hi My Name Is Sage 
               And I am a Junior at <br/><br/>
               The University of Pittsburgh<br/><br/>
               Studying Computer Science.<br/><br/>
               I like building cool web development<br/><br/>
               projects, including a weather web app,<br/><br/>
               movie web app, and calculator web app.<br/><br/>
            </p>
        </div>
    );
}

export default Introduction;