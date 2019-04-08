import React from 'react';
import Modals from '../Modals/Modals';

const Sidebar = props => {
  return (
    <div
      style={{
        float: 'right',
        background: 'silver',
        paddingRight: '10px',
        paddingLeft: '10px',
        height: '100%',
      }}
    >
      <Modals
        change={props.change}
        submit={props.submit}
        people={props.people}
      />
      <hr />
      <br />
      <segment>
        <u>Products</u>
        <br />
        Products your subscribers bought.
      </segment>
      <hr />
      <br />
    </div>
  );
};

export default Sidebar;
