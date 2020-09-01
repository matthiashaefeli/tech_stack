import React, { Component } from 'react';
import axios from 'axios';

const StackApi = () => {
  // state is not working i need to dispatch the data
  state = { stacks: [] };

  axios.get('http://localhost:3000/stacks')
  .then(response => this.setState({ stacks: response.data }));

  // not this.setState() it should be dispatch()

  return this.state.stacks
}

export default StackApi();