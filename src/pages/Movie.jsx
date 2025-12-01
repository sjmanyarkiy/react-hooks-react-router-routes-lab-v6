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
        <h1>{title}</h1>
        <p>{time}</p>
        {/* ✅ Render each genre in its own span */}
        {genres && genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
};

export default Movie;
