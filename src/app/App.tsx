import React from 'react';
import styles from './App.module.css';
import Title from './components/Title';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <Title name="Brgfst." />
        <form className={styles.form}>
          <input
            type="text"
            className={styles.formText}
            placeholder="First name"
          />
          <input
            type="text"
            className={styles.formText}
            placeholder="Last name"
          />
          <input type="submit" className={styles.formSubmit} value="Submit" />
        </form>
      </main>
    </div>
  );
}

export default App;
