import React, {Component} from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Headers/Header';
import Body from './Body/Body';

class App extends Component {
  state = {
    people: [
      {fullName: 'George Kevorkian', email: 'george@george.am'},
      {fullName: 'Sebouh Mazloumian', email: 'sebouh@george.am'},
      {fullName: 'Shant Kevorkian', email: 'shant@george.am'},
      {fullName: 'Jack Kevorkian', email: 'jack@george.am'},
      {fullName: 'John Matthew', email: 'john@george.am'},
      {fullName: 'Mike Malter', email: 'mike@george.am'},
      {fullName: 'Michael Chen', email: 'michael@george.am'},
    ],

    term: '',
  };

  handleChange = name => e => {
    this.setState({[name]: e.target.value});
  };

  onSubmit = () => {
    this.setState({
      people: [
        ...this.state.people,
        {
          fullName: this.state.fullName,
          email: this.state.email,
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <Header change={this.handleChange} />
        <Sidebar
          change={this.handleChange}
          submit={this.onSubmit}
          people={this.state.people}
        />
        <Body people={this.state.people} term={this.state.term} />
      </div>
    );
  }
}

export default App;
