import React from 'react'
import CardMovies from './CardMovies'

const ListMovies = ({Movies,word,stars}) => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
        {
            Movies.filter((el,i,t)=> el.title.toUpperCase().includes(word.toUpperCase()) && el.rating >= stars).map((el,i,t)=><div>
                <CardMovies el={el}/>
            </div>)
        }
    </div>
  )
}

export default ListMovies