import React from "react";
import Cards from './Card';
import Typed from 'react-typed'

import { useQuery } from "@apollo/client";
import {QUERY_PROJECTS} from '../utils/queries';
function githubPage(){
    window.location.assign("https://github.com/namees-github")
  }

    const Projects=()=>{
        const { loading, data } = useQuery(QUERY_PROJECTS);
        const profiles = data?.profiles || [];
        return(
        

<><h2 class='text-light text-center' onClick={githubPage} >
  <Typed className="font-weight-light"
          strings={['My Works 💻', 'My Projects ', 'Click here to view my Github	']}
          backSpeed={70} typeSpeed={60} backDelay={1000}/></h2>


        <div class="d-flex  flex-wrap justify-content-between ">
            {profiles.map(({title,description,website,image,_id})=>(
<Cards title={title} description={description} website={website} image={image} _id={_id} key={_id}/>            ))}


</div>
</>



    )
}
export default Projects;