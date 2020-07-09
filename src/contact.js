import React from 'react'

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: 'write your message here',
        value2: 'Full name',
        value3: 'Email Address'

      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Submitted successfully');
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input value={this.state.value2} type="text" name="name" />
          </label>
          <label>
            Email Address
            <input value={this.state.value3} type="email" name="email" />
          </label>
          <label>
            Essay:
            <textarea value={this.state.value1} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Contact