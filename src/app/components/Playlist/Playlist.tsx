import React, { useState } from 'react';
import styles from './Playlist.module.css';

function Playlist(): JSX.Element {
  const [data, setData] = useState<song[]>([]);
  async function getSongs() {
    const response = await fetch('https://json-server.machens.dev/songs');
    const songs = await response.json();
    setData(songs);
  }

  const allSongs = data.map((song) => <li key={song.id}>{song.title}</li>);

  return (
    <div>
      <button className={styles.playlistBtn} onClick={getSongs}>
        Show Playlist
      </button>
      <ul>{allSongs}</ul>
    </div>
  );
}
export default Playlist;
