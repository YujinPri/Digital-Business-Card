import profilePic from '../assets/profile-pic.png'
import emailIcon from '../assets/email-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'

export default function Info() {
    return (
        <section className='info'>
            <div className='info-profile-pic'>
                <img src={profilePic} alt="Profile of Eugene Privaldos" className='info-profile-pic' />
            </div>
        
            <div className='info-basic-info'>
                <h2 className='info-name'>Eugene Privaldos</h2>
                <h4 className='info-job-role'>Frontend Developer</h4>
                <p className='info-website'>eugeneprivaldos.website</p>
            </div>

            <div className='info-btn-group'>
                <a href="mailto:eugene.privaldos.9@gmail.com">
                <button className='info-email-btn'>
                    <img src={emailIcon} alt="Email Icon" />  
                    Email
                </button>
                </a>

                <a href="https://www.linkedin.com/in/eugene-privaldos/">
                    <button className='info-linkedin-btn'>
                        <img src={linkedinIcon} alt="Linked Icon" />
                        LinkedIn
                    </button>

                </a>      
            </div>
        </section>
    )
}