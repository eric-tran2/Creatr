import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { errors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign Up</Link>,
    member: 'Not a member?'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(errors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
