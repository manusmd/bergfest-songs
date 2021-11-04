import React, { useState } from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  const [name, setName] = useState<string | null>(null);
  console.log(name);
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <Title name="Brgfst." />
        <Form updateName={(userName) => setName(userName)} />
      </main>
    </div>
  );
}

export default App;
