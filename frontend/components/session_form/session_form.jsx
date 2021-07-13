import React from 'react';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      age: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  guestLogin() {
    this.setState({
      ['email']: 'guestUser@creatr.com',
      ['password']: 'password'
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }

  

  render() {
    let signupForm = () => null;
    if (this.props.formType === 'signup') {
      signupForm = () => (
        <>
          <br />
            <input type="text" 
            placeholder="First name"
            value={this.state.first_name} 
            onChange={this.update('first_name')} 
            className="login-input" />
          <br />
            <input type="text" 
            placeholder="Last name"
            value={this.state.last_name} 
            onChange={this.update('last_name')} 
            className="login-input" />
          <br />
            <input type="text" 
            placeholder="Your age"
            value={this.state.age} min="0" max="200" 
            onChange={this.update('age')} 
            className="login-input" />
          <br />
        </>
      )
    } 


    let guest_login = () => null;
    if (this.props.formType !== 'signup') {
      guest_login = () => (
        <form className='guest' onSubmit={this.handleSubmit}>
          <button className='guestbutton' onClick={this.guestLogin}>guest login</button>
        </form>
      )
    }


    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          {this.renderErrors()}
          <div className="login-form">
            {/* <img src="https://creatr-seed.s3.amazonaws.com/c_logo.png" alt="logo is broken" className="formLogo" /> */}
            <h1>Welcome to Creatr!</h1>
            <br />
            <br />
              {signupForm()}
              <input type="text"
                value={this.state.email}
                placeholder="Email address"
                onChange={this.update('email')}
                className="login-input"
              />
            <br />
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
              />
              <br />
              <br />
              {this.props.member} {this.props.navLink}
              <br />
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        {guest_login()}
      </div>
    );
  }
}

export default SessionForm;
