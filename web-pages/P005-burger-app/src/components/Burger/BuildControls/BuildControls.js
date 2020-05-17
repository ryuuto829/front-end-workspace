import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = props => (
  <div className={styles.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemove(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
        disabled={props.disabled[ctrl.type]}  />
    ))}
    <button 
    disabled={!props.purchasable}
    className={styles.OrderButton}
    onClick={props.ordered}>ORDER NOW</button>
  </div>
);

export default buildControls;