import React from 'react';

const Header = props => {
  return (
    <div
      style={{
        background: 'silver',
      }}
    >
      <ul
        hover
        style={{
          display: 'flex',
          listStyleType: 'none',
          margin: '0',
          justifyContent: 'space-between',
          padding: '15px',
        }}
      >
        <li>
          <a href>Subscribers</a>
        </li>
        <li>
          <a href>Automations</a>
        </li>
        <li>
          <a href>Forms</a>
        </li>
        <li>
          <a href>Sequences</a>
        </li>
        <li>
          <a href>Broadcasts</a>
        </li>
        <li>
          <input
            placeholder="Search Subscribers..."
            style={{height: '38px', width: '100%'}}
            onChange={props.change('term')}
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
