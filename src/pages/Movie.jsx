import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {

 const { id } = useParams();
 const [ movie, setMovie ] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(res => res.json())
    .then((data) => setMovie(data))
    .catch(error => console.error(error))
  }, [id])

  if (!movie) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Loading...</h1>
        </main>
      </>
    );
  }

  const { title, time, genres } = movie;

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>Movie Title: {title}</h1>
        <p>Movie Time: {time}</p>
        {genres && genres.length > 0 && (
          <div>
            <p>Genres:</p>
            {genres.map((genre, index) => (
              <span key={index}>{genre}{index < genres.length - 1 ? ', ' : ''}</span>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Movie;
