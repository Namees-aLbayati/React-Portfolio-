import React from "react";
import {Row, Col} from 'reactstrap';
import {RiComputerLine} from 'react-icons/ri';

import {AiOutlineCloudServer, AiFillTool} from 'react-icons/ai';
const ExpTitle = ({title}) => {
    return (
      <h3 className="font-weight-bold text-white">{title}</h3>
    )
  }
const Education=()=>{
    return(

<div class='p-5 m-5'>
<Row>

<Col>

<RiComputerLine size="4em" color="#00bfff	"/>
        <ExpTitle title="Front-End" />
        <p class="text-light">HTML5 / CSS3</p>
        <p class="text-light">JS / ES6</p>
        <p class="text-light">JQuery</p>
        <p class="text-light">Bootstrap</p>
        <p class="text-light">ReactJS</p>
        <p class='text-light'>Handlebars frontend/backend tamplete</p>
</Col>


<Col>

<AiOutlineCloudServer size="4em" color="#00bfff	"/>
        <ExpTitle title="Back-End" />
        <p className="text-light">NodeJS</p>
        <p className="text-light">ExpressJS</p>
        <p className="text-light">Mysql/sequelize/mongoDB/idb</p>
</Col>


<Col>

<AiFillTool size="4em" color="#00bfff	"/>
        <ExpTitle title="Front-End" />
        <p className="text-light">Github</p>
        <p className="text-light">Postman</p>
        <p className="text-light">mongoDB-Compass</p>
        <p className="text-light">VSCode</p>
</Col>
</Row>


</div>




    )
}


const style={
    border2:{
border:'3px solid #696969',
heigth:'300px',
width:'500px'

// padding:"20px",
// margin:"30px"

}

}
export default Education;