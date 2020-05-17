import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.module.css';

class BurgerIngredient extends React.Component {

  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={styles.BreadButtom}></div>
        break;
      case ('bread-top'):
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={styles.Meat}></div>
        break;
      case ('cheese'):
        ingredient = <div className={styles.Cheese}></div>
        break;
      case ('salad'):
        ingredient = <div className={styles.Salad}></div>
        break;
      case ('bacon'):
        ingredient = <div className={styles.Bacon}></div>
        break;
      default:
        ingredient = null;
    }
    console.log(ingredient);
    return ingredient;
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;