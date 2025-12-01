import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Directors() {

  const [ directors, setDirectors ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => res.json())
    .then(data => setDirectors(data))
  }, [])


  const { id, name, movies } = directors;

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => {
          return (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </main>
    </>
  );
};

export default Directors;
