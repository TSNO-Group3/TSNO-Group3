import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Layout from "./Layout"

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleClick(event) {
    event.preventDefault();
    alert('Thank you for hiring me');

  };

  handleSubmit(event) {
    event.preventDefault();

    alert('Thank you for your feedback');
  };

  render() {
    return (
      <div id="Profile">
        <Layout>
          <Button color="primary" size="sm" /*onClick={addService(service)}*/>Add Service</Button>{" "}
          <ListGroup>
            <ListGroup.Item>Service 1</ListGroup.Item>
            <ListGroup.Item>Service 2</ListGroup.Item>
          </ListGroup>{" "}
          <Button color="primary" size="sm">Hire Me!!</Button>{" "}
          <Button color="primary" size="sm">Done</Button>{" "}
        </Layout>
      </div>
    );
  }
}

export default Profile;