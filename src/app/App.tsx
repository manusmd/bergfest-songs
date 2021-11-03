import React from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <Title name="Brgfst." />
        <Form field1Name="First Name" field2Name="Last name" />
      </main>
    </div>
  );
}

export default App;
