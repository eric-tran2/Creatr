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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
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
  
  render() {
    let sign_up_form = () => null;
    if (this.props.formType === 'signup') {
      sign_up_form = () => (
        <>
          <label>First name:
            <input type="text" value={this.state.first_name} onChange={this.update('first_name')} className="login-input" />
          </label>
          <br />
          <label>Last name:
            <input type="text" value={this.state.last_name} onChange={this.update('last_name')} className="login-input" />
          </label>
          <br />
          <label>Age:
            <input type="number" value={this.state.age} min="0" max="150" onChange={this.update('age')} className="login-input" />
          </label>
          <br />
        </>
      )
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Start creating with Creatr!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            {sign_up_form()}
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
