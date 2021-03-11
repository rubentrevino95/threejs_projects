import './App.css';
import {useState} from 'react';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState([
    {
      title: 'song 1',
      artist: 'artist 1',
      img_src: '',
      src: ''
    },
    {
      title: 'song 2',
      artist: 'artist 2',
      img_src: '',
      src: ''
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player 
      song={songs[currentSongIndex]}
      nextSong={songs[nextSongIndex]}
      />
    </div>
  );
}

export default App;
