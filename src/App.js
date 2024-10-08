import { useState } from 'react';
import './App.css';
import NavMovies from './Components/NavMovies';
import ListMovies from './Components/ListMovies';
import AddMovies from './Components/AddMovies';
import FilterMovies from './Components/FilterMovies';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import MoviePage from './Components/MoviePage';


function App() {
  
const [Movies,setMovies]=useState([
  {title:"Shrek",description:"In a bid to get his land back, Shrek agrees to retrieve Princess Fiona for the fairytale-hating Lord Farquaad of Duloc, but falls in love with her on the way.",url:"https://m.media-amazon.com/images/S/pv-target-images/030f9ae65cadc9afc0e3c51ed35d2ddeb814f213d7a87fc5aa4445738ebb32b9.jpg",rating:5 ,iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/CwXOrWvPBPk?si=nc8zXaZVAvFr7_VN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>, id:Math.random()},
  {title:"Madagascar",description:"Four spoiled animals from the New York Central Zoo escape with the unintentional help of four fugitive penguins. They subsequently find themselves in Madagascar amidst happy lemurs.",url:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p87313_p_v10_ax.jpg",rating:4 ,iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/orAqhC-Hp_o?si=AJUEJ5VUplf_OIR3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>, id:Math.random()},
  {title:"the departed",description:"An undercover agent and a spy constantly try to counter-attack each other in order to save themselves from being exposed in front of the authorities. Meanwhile, both try to infiltrate an Irish gang.",url:"https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg",rating:5, iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/r-MiSNsCdQ4?si=Ivl4zeY03VRnPy4K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>, id:Math.random()},
  {title:"Forrest Gump",description:"Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",url:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",rating:4, iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/bLvqoHBptjg?si=dhBL5JWC5JU0gz7y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>, id:Math.random()},
])
 const [word,setWord]=useState("")
 const [stars, setStars]=useState(0)
  return (
    <div>
      <NavMovies/>
      
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/listmovies' element={<>
          <AddMovies setMovies={setMovies} Movies={Movies}/>
          <FilterMovies word={word} setWord={setWord} stars={stars} setStars={setStars}/>
          <ListMovies Movies={Movies} word={word} stars={stars}></ListMovies>
        </>}/>
        <Route path='/moviepage/:id' element={<MoviePage Movies={Movies}/>}/>
        
        
      </Routes>


      
      {/* <AddMovies setMovies={setMovies} Movies={Movies}/>
      <FilterMovies word={word} setWord={setWord} stars={stars} setStars={setStars}/>
      <ListMovies Movies={Movies} word={word} stars={stars}/> */}
    </div>
  );
}

export default App;
