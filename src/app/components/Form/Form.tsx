import React, { FormEvent, useState } from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState([]);
  const [disable, setDisable] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    fetch('https://json-server.machens.dev/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
    setDisable(true);
  }

  async function getUsers() {
    const response = await fetch('https://json-server.machens.dev/users');
    const users = await response.json();
    return users;
  }

  type OptionType = {
    id: number;
    firstName: string;
    lastName: string;
  };

  async function handleSelectClick(event: FormEvent) {
    event.preventDefault();
    const users = await getUsers();
    setUsers(users);
  }
  const allUsers = users.map(({ id, firstName, lastName }: OptionType) => (
    <option key={id}>
      {firstName} {lastName}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select className={styles.dropdown} onClick={handleSelectClick}>
        {allUsers}
      </select>
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
      <input
        disabled={disable}
        type="submit"
        className={styles.formSubmit}
        value="Submit"
      />
    </form>
  );
}
export default Form;
