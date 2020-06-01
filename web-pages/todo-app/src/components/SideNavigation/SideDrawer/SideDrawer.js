import React from 'react';

import SideDrawerMenu from '../../Layout/SideDrawerMenu/SideDrawerMenu';
import TextField from '../TextField/TextField';

const SideDrawer = (props) => {
  return (
    <SideDrawerMenu showed={props.showed}>
      <h1>New ToDo List</h1>
      <TextField />
    </SideDrawerMenu>
  );
}

export default SideDrawer;