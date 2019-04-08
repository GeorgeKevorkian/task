import React from 'react';
import {Button, Modal} from 'semantic-ui-react';

const Modals = props => {
  return (
    <div>
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
              value={props.people.fullName}
              onChange={props.change('fullName')}
              name="name"
            />
            <br />
            Email
            <br />
            <input
              style={{width: '100%', height: '38px'}}
              value={props.people.email}
              onChange={props.change('email')}
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
          <Button color="green" inverted onClick={props.submit}>
            Save
          </Button>
        </Modal.Actions>
      </Modal>
      <hr />
      <span>All Subscribers | {props.people.length} Subscribers</span>
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
    </div>
  );
};

export default Modals;
