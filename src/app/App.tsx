import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Playlist from './components/Playlist/Playlist';

function App(): JSX.Element {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    document.title = name ? `Hi ${name}` : 'Bergfest';
  });

  let content;
  if (name) {
    content = <Playlist />;
  } else {
    content = <Form updateName={setName} />;
  }
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <Title name={name ? 'Sngs.' : 'Brgfst.'} />
        {content}
      </main>
    </div>
  );
}

export default App;
