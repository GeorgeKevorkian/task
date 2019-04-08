import React from 'react';
import ReactPlayer from 'react-player';

const Body = props => {
  const people = props.term
    ? props.people.filter(
        person =>
          person.fullName.toLowerCase().includes(props.term.toLowerCase()) ||
          person.email.toLowerCase().includes(props.term.toLowerCase())
      )
    : props.people;

  return (
    <div>
      <div style={{textAlign: 'center', marginBottom: '50px'}}>
        <h1>
          Organize your subscribers with tags and segments
          <h3>Any way you want it, that’s the way you need it</h3>
        </h1>
      </div>
      <div>
        <div
          style={{
            float: 'left',
            marginLeft: '30px',
            marginRight: '20px',
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jssO8-5qmag"
            width="500px"
          />
        </div>
        {people.map((person, id) => (
          <ul>{`${id + 1}: ${person.fullName} | Email: ${person.email}`}</ul>
        ))}
      </div>
    </div>
  );
};

export default Body;
