import React from 'react'

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: 'Write your message here',
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
        <form onSubmit={this.handleSubmit} className="card-width contact-box">
          <h4 className="card-title contact-border textDark">Contact</h4>
          <section className="form-group">
          <label className="exampleFormControlInput1 textDark">
            Name:
            <input value={this.state.value2} className="form-control" type="text" name="name" />
          </label>
          </section><br />
          <section className="form-group">
          <label className="exampleFormControlInput1 textDark">
            Email Address
            <input value={this.state.value3} className="form-control" type="email" name="email" />
          </label>
          </section><br />
          <section className="form-group">
          <label className="exampleFormControlTextarea1 textDark">
            Message:
            <textarea className="form-control" rows="3" value={this.state.value1} onChange={this.handleChange} />
          </label>
          </section><br />
          <input type="submit" value="Submit"  className="btn mb-2 btn-color"/>
        </form>
      );
    }
  }

export default Contact