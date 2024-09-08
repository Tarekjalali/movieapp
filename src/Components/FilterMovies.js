import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';



import React, { useState } from 'react'

const FilterMovies = ({word,setWord, stars, setStars}) => {
    

    const handleReset=()=>{
      setWord("")
      setStars(0)
       
    }
  return (
    <div>      
    
    <Navbar className="bg-body-tertiary justify-content-between">
    
    <Form inline>
      
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
          onChange={(e)=>setWord(e.target.value)} value={word}/>
       
    </Form>
  </Navbar>
  <Rating onChange={(e)=>setStars(e.target.value)} value={stars}/>
  <Button onClick={handleReset}>Reset</Button>
  </div>
  )
}

export default FilterMovies