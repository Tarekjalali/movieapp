import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MoviePage = ({Movies}) => {
    const navigate= useNavigate()
    const {id}=useParams()
    const found = Movies.find((el,i,t)=>el.id==id)
  return (
    <div>
        <h3>{found.title}</h3>
        <img src={found.url} style={{width:'300px'}}></img>
        {found.iframe}
        <button onClick={()=>navigate('/')}>Home</button>
    </div>
  )
}

export default MoviePage