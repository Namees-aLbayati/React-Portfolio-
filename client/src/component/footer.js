import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
function Email(){
    window.location.assign("https://nameesmohammed.herokuapp.com/")
}
const Footer=()=>{
    const location=useLocation();
    const navigate=useNavigate();

    return(
        <footer class='text-light text-center d-flex justify-content-center'>
                     <h4 class='m-3'>&copy; {new Date().getFullYear()} -  <a onClick={Email}>Namees Mohammed
       
          
       </a></h4>
                {location.pathname !=='/' &&

       
       <button type="button" class="btn btn-outline-light" onClick={()=>navigate(-1)}>
            Go Back
            &larr; 
        </button>
        }
               
               
           


        </footer>
    )
}
export default Footer ;