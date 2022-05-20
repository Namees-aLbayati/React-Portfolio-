import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PRCO } from '../utils/queries';
import { useParams } from 'react-router-dom';
export default function Comment() {
  const {projectId}=useParams()
    const {loading,data}=useQuery(QUERY_PRCO,
{      variables: { profileId:projectId },
}      );
  const comments=data?.profile.comment||[]

  return (
    <div class='m-4'>
{comments.map((comment)=>(
 <div class="card m-4">
 <div class="card-header">
   {comment.username}
 </div>
 <div class="card-body">
   <h5 class="card-title"></h5>
   <p class="card-text">{comment.comment}.</p>

 </div>
</div>
))

}

   
{/* namees remember you need to add comments for each project here */}
    </div>
  )
}
