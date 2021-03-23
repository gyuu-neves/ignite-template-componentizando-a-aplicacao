import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import { useState } from 'react';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleClick={handleClickButton} selectedId={selectedGenreId} />
      <Content selectedId={selectedGenreId} />
    </div>
  )
}
