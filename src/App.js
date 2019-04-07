import React, {Component} from 'react';
import {Button, Modal} from 'semantic-ui-react';

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
    const people = this.state.term
      ? this.state.people.filter(
          person =>
            person.fullName
              .toLowerCase()
              .includes(this.state.term.toLowerCase()) ||
            person.email.toLowerCase().includes(this.state.term.toLowerCase())
        )
      : this.state.people;

    return (
      <div>
        <div
          style={{
            float: 'right',
            backgroundColor: 'silver',
            paddingRight: '10px',
            paddingLeft: '10px',
            height: '100%',
          }}
        >
          <div style={{display: 'flex'}} style={{marginBottom: '20px'}}>
            <input
              placeholder="Search Subscribers"
              style={{height: '38px', marginRight: '10px'}}
              onChange={this.handleChange('term')}
            />
          </div>
          <hr />
          <Modal
            trigger={
              <Button primary style={{width: '100%'}}>
                Add Subscribers
              </Button>
            }
          >
            <Modal.Header>Add Subscriber</Modal.Header>
            <Modal.Content>
              <div style={{backgroundColor: '#ADD8E6'}}>
                Importing subscribers here will trigger automation rules and
                automations just like subscriptions from a form or integration.
                Temporarily disable any rules and pause any automations that you
                don't want to run.
              </div>
              <br />
              <form>
                Full Name
                <br />
                <input
                  style={{width: '100%', height: '38px'}}
                  value={this.state.people.fullName}
                  onChange={this.handleChange('fullName')}
                  name="name"
                />
                <br />
                Email
                <br />
                <input
                  style={{width: '100%', height: '38px'}}
                  value={this.state.people.email}
                  onChange={this.handleChange('email')}
                  name="email"
                />
                <br />
                <table>
                  <tr>
                    <th placeholder="No sources selected">
                      Include these Subscribers
                    </th>
                  </tr>
                  <tr>
                    <td>Forms</td>
                  </tr>
                  <tr>
                    <td>Sequences</td>
                  </tr>
                  <tr>
                    <td>Tags</td>
                  </tr>
                </table>
              </form>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" inverted>
                Cancel
              </Button>
              <Button color="green" inverted onClick={this.onSubmit}>
                Save
              </Button>
            </Modal.Actions>
          </Modal>
          <hr />
          <span>All Subscribers | {this.state.people.length} Subscribers</span>
          <hr />
          <br />
          <segment>
            <u>Segments</u>
            <br />
            <Modal trigger={<button>+ Create a segment</button>} />
          </segment>
          <hr />
          <br />
          <segment>
            <u>Tags</u>
            <br />
            Tags help you organize subscribers.
            <br />
            <Modal trigger={<button>+ Create a tag</button>} />
          </segment>
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
        <div style={{float: 'left'}}>
          {people.map((person, id) => (
            <ul>{`${id + 1}: ${person.fullName} | Email: ${person.email}`}</ul>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
