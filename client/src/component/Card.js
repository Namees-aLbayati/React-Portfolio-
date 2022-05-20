import React, { useEffect, useState } from 'react';
import {AiOutlineEye} from "react-icons/ai"
import {AiOutlineHeart} from 'react-icons/ai'
import Mymodal from './modal';

import { Link } from 'react-router-dom';
const Cards=({title,description,website,image,_id})=>{

const [tryshow,settry]=useState(false)


const [likes,setLikes]= useState(() => {
  // getting stored value
  const saved = localStorage.getItem("name");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});









 

useEffect(() => {
  localStorage.setItem("name", JSON.stringify(likes));
}, [likes]);






    return(

     
      <div class="flip-card m-5">
      <div class="flip-card-inner m-5" >
        <div class="flip-card-front">
          <img src={require(`../images/${image}`)} alt="Avatar" className='cards'/>
      <div class='text-center'>
         <AiOutlineHeart/> <p class='text-light'> likes:{likes}
         </p>
      </div>
      
        </div>
        <div class="flip-card-back" onDoubleClick={()=>setLikes(1) } >
          <h3>{title} </h3>
          <p  className='text'>{description}</p>
         <button class="button button2 m-5 fw-bolder" onClick={()=> window.location.assign(`${website}`)}>Live Demo<AiOutlineEye/></button>
<div className='mb-3 ' >
  
{/* <Link to={`/project/${_id}`} onClick={()=>settry(true)} title='hh'/>
<button  onClick={()=>settry(true)} className="btn btn-block btn-squared btn-light text-dark"      >

View and add Reviews */}

{/* </button> */}
<Link className="btn btn-block btn-squared btn-light text-dark"
 to={`/projects/${_id}`} >
Add Reviews                </Link>

</div>

    </div>
    </div>
    </div>
        
 
    )
}
export default Cards;