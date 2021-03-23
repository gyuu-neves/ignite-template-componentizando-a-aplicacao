import { useState, useEffect } from 'react';
import { Button } from './Button';

import '../styles/sidebar.scss';

import { api } from '../services/api';

import { GenreResponseProps } from '../App'


interface SelectedGenreIdProps {
  handleClick(id: number): void;
  selectedId: number;
}



export function SideBar({handleClick, selectedId}:SelectedGenreIdProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}  
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={selectedId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
