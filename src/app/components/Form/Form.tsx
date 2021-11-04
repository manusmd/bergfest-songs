import React, { useState } from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  console.log(firstName);
  console.log(lastName);

  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.formText}
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        className={styles.formText}
        placeholder="Last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input type="submit" className={styles.formSubmit} value="Submit" />
    </form>
  );
}
export default Form;
