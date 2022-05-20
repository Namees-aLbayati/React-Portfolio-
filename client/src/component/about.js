import React from 'react';
import Typed from 'react-typed';
import Background from '../images/profile.png';
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa'



function gitHub() {
  window.location.assign("https://github.com/namees-github")
}




const About = () => {




  return (

    <section style={styles.about}>
      <div style={styles.image}>
      </div>





      <h2 style={styles.title} className="font-weight-bold">Namees Albayati<br />
        <Typed
          strings={['Full Stack Web Developer', 'Information and Communication Engineer']}
          backSpeed={70} typeSpeed={60} backDelay={1000}
        /></h2>
      <button type="button" onClick={gitHub} class="btn btn-outline-dark p-3 m-4"> <FaGithub />
        Github</button>
      <button type="button" onClick={() => window.location = 'mailto:nameesmohammed12@gmail.com'} class="btn btn-outline-dark p-3 m-4" > <FaMailBulk />
        Email</button>
      <button type="button" onClick={() => window.location.assign('https://www.linkedin.com/in/namees-albayate-604005227/')} class="btn btn-outline-dark p-3 m-4">  <FaLinkedin />
        linkedin</button>


    </section>
  )
};

var styles = {
  about: {
    background: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 90%)",

    marginTop: '10em',
    border: '3px solid #eee',
    paddingBottom: '1em',
    textAlign: 'center'
  },
  image: {
    backgroundImage: `url(${Background})`,
    width: '200px',
    height: '200px',
    margin: '0 auto',
    borderRadius: '50%',
    backgroundSize: 'cover',
    marginTop: '-100px',
    marginBottom: '40px'
  },
  details: {
    margin: '0',
    marginTop: '-2em'
  },
  title: {
    color: 'black',
    fontSize: '2em',
  },


}


export default About;