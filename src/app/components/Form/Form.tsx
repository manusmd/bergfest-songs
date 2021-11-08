import React, { FormEvent, useEffect, useState } from 'react';
import styles from './Form.module.css';

type callback = {
  updateName: (userName: string) => void;
};

function Form({ updateName }: callback): JSX.Element {
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

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await fetch('https://json-server.machens.dev/users');
    const users = await response.json();
    setUsers(users);
  }

  type OptionType = {
    id: number;
    firstName: string;
    lastName: string;
  };

  const allUsers = users.map(({ id, firstName, lastName }: OptionType) => (
    <option key={id}>
      {firstName} {lastName}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select
        className={styles.dropdown}
        onChange={(event) => {
          updateName(event.target.value);
        }}
      >
        <option>Select User</option>
        {allUsers}
      </select>
      <h3>or</h3>
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
