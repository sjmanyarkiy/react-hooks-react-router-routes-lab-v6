import {Link} from 'react-router-dom';

function MovieCard({movie}) {

  const { id, title, time, genres } = movie
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
        <Link to={`/movie/${id}`}>View Movie</Link>
    </article>
  );
};

export default MovieCard;