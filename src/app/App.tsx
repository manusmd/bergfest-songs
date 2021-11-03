import React from 'react';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bergfest.</h1>

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
      </div>
    </main>
  );
}

export default App;
