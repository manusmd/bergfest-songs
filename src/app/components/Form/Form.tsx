import React from 'react';
import styles from './Form.module.css';

type formProps = {
  field1Name: string;
  field2Name: string;
};

function Form({ field1Name, field2Name }: formProps): JSX.Element {
  return (
    <form className={styles.form}>
      <input type="text" className={styles.formText} placeholder={field1Name} />
      <input type="text" className={styles.formText} placeholder={field2Name} />
      <input type="submit" className={styles.formSubmit} value="Submit" />
    </form>
  );
}
export default Form;
