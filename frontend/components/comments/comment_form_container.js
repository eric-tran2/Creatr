import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions'
import CommentForm from './comment_form';

const mapStateToProps = state => {
  // debugger
  return ({
  currentUser: state.entities.users[state.session.id],
    photo: Object.values(state.entities.photos)
})}

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);