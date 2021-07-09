import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { errors, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Log In</Link>,
    member: 'Already a member?'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(errors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
