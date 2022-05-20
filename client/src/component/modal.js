import React from 'react'
import {gql} from '@apollo/client';
import {QUERY_COMMENT} from '../utils/queries'
import { useMutation } from '@apollo/client'
import { ADD_COMMENT } from '../utils/mutation'
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT1 } from '../utils/queries';
import { useParams } from 'react-router-dom';
import {QUERY_PRCO} from '../utils/queries'

import Comment from './comment';

import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Mymodal({settry}) {
  const {projectId}=useParams()
  const [settry2,customset]=useState(settry)

  const [modalshow, setmodalShow] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [nameEL, setUsername] = useState("")
  const [commentEL, setComment] = useState("")



  const [addComment, { error }] = useMutation(ADD_COMMENT,{
    update(cache,{data:{addComment}}){
      try{
     const {tryy}=cache.readQuery({query:QUERY_COMMENT})
    console.log('CACHHHH READ',tryy)
     cache.writeQuery({
       query:QUERY_PRCO,
       data:{profiles:[...tryy,addComment]}
     })

    
      }catch(e){
        console.error(e)
      }
    }
  })



  //  if (loading) return 'Submitting namees...';
  //  if (error) return `Submission error namees! ${error.message}`;







  const handleFormSubmission = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addComment({
        variables: { projectId:projectId,comment:commentEL,username:nameEL }

      })


      setUsername("");
      setComment("")





    } catch (err) {
      console.log(err)
    }
  }





  return (
    <div class='d-flex justify-content-center m-1 p-2'>









      <Modal show={settry2} >

        <Modal.Header closeButton onClick={()=>customset(!settry)} >
          <Modal.Title>Add your Review Now!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form >

            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" value={commentEL} onChange={(e) => setComment(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea" label="username" className='mb-3' >
              <Form.Control as="textarea" placeholder="Leave your name here" value={nameEL} onChange={(event) => setUsername(event.target.value)} />
            </FloatingLabel>
            <Button variant="primary" onClick={handleFormSubmission}>
              Submit Your comment
            </Button>
          </form>
          <Comment   />
        </Modal.Body>
        <Modal.Footer>
          {location.pathname !== '/' &&

            <Button variant="secondary" onClick={()=>customset(!settry)}>
              Close
       
            </Button>
          }


        </Modal.Footer>

      </Modal>

    </div>
  )
}
