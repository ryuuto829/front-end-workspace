import React from 'react';
import styles from './Order.module.css';

const order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({ amount: props.ingredients[ingredientName], name: ingredientName });
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span key={ig.name}>{ig.name} ({ig.amount}) </span>;
  })

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>USD {Number(props.price).toFixed(2)}</strong></p>
    </div>
  );
}

export default order;