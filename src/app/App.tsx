import React, { useState } from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  const [name, setName] = useState<string | null>(null);
  console.log(name);
  let content;
  if (name) {
    content = <p>Please add some songs</p>;
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
