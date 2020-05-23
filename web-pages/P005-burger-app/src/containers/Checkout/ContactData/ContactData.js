import React from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input className={styles.Input} type="text" name="name" placeholder="Your name" />
          <input className={styles.Input} type="text" name="email" placeholder="Your email" />
          <input className={styles.Input} type="text" name="street" placeholder="Your street" />
          <input className={styles.Input} type="text" name="postal code" placeholder="Your postal code" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;