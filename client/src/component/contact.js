import React from 'react';
import Typed from 'react-typed'

const Contact = () => {
    return (
      <section style={{background: "black",margin:'100px'}} className="text-center pt-3 pb-5">
        <h1 class='text-light'>
        <Typed
  strings={['Intrest In Working with me?  ', 'If you have any Questions?','Go Ahead']}
  backSpeed={70} typeSpeed={60} backDelay={1000}
  />   
        </h1>
 
          <h4 className="w-100 text-center font-weight-normal text-white mt-3">I am currently available</h4>
        <div className="mt-5 mb-3">
          <a className="my-button border-white" href="mailto:nameesmohammed12@gmail.com">Start Now 📤</a>
        </div>
      </section>
    )
  }
  
  export default Contact;