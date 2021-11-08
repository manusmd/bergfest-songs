import React, { useState } from 'react';

function Playlist(): JSX.Element {
  type Song = {
    id: number;
    title: string;
  };
  const [data, setData] = useState<Song[]>([]);
  async function getSongs() {
    const response = await fetch('https://json-server.machens.dev/songs');
    const songs = await response.json();
    setData(songs);
  }

  const allSongs = data.map((song) => <li key={song.id}>{song.title}</li>);

  return (
    <div>
      <button onClick={getSongs}>Show Playlist</button>
      <ul>{allSongs}</ul>
    </div>
  );
}
export default Playlist;
