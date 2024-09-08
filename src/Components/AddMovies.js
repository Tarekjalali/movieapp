import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';


import React from 'react'

const AddMovies = ({setMovies, Movies}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [url,setUrl]=useState("")
  const [rating,setRating]=useState(0)

  const AddMovie=()=>{

    setMovies([...Movies,{title,description,url,rating}])
    handleClose()
  }



  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>description</Form.Label>
        <Form.Control type="email" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Url</Form.Label>
        <Form.Control type="email" placeholder="Enter url" onChange={(e)=>setUrl(e.target.value)} />
       </Form.Group>

       <Rating name="read-only" onChange={(e)=>setRating(e.target.value)}/>



  
     
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddMovie}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovies