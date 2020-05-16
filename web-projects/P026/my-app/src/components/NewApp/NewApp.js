import React from 'react';

import styles from './NewApp.module.css';
import Persons from '../Persons/Persons';

class NewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: false,
      people: [
        {
          name: 'Dmytro',
          job: 'Student',
          age: 23
        },
        {
          name: 'Max',
          job: 'Designer',
          age: 25
        },
        {
          name: 'Dan',
          job: 'Teacher',
          age: 30
        }
      ]
    };
  }

  toggleBtnHandler = () => {
    this.setState({
      showName: !this.state.showName
    });
  }

  changeNameHandler = e => {
    const itemID = e.target.parentNode.id;
    const newPeoples = this.state.people;
    newPeoples[itemID].name = e.target.value;

    this.setState({
      people: [...newPeoples]
    })
  }

  deleteItemHandler = e => {
    console.log(e.target.children)
    if (e.target.children.length) {
      const itemID = e.target.id;
      const newPeoples = this.state.people;
      newPeoples.splice(itemID, 1);
  
      this.setState({
        people: [...newPeoples]
      });
    }
  }

  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.header}>{this.props.appName}</h1>
        <Persons
          people={this.state.people}
          showed={this.state.showName}
          clicled={this.toggleBtnHandler}
          changeName={this.changeNameHandler}
          deleteItem={this.deleteItemHandler} />
      </div>
    );
  }
}

export default NewApp;