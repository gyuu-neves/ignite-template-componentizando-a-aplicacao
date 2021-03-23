import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

import { GenreResponseProps, MovieProps } from '../App';

import '../styles/content.scss';
import { api } from "../services/api";
// import { Divide } from "react-feather";

interface genreIdProps {
  selectedId: number;
}

export function Content({selectedId}:genreIdProps) {
  
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = 
  useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedId]);

  return (

    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}