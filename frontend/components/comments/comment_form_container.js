import {connect} from 'react-redux';
import { createComment, requestComment, requestComments} from '../../actions/comment_actions';
import CommentForm from './comment_form';


const mapStateToProps = (state, ownProps) => {
return {
  
  comment: {
    body: '',
    photo_id: parseInt(ownProps.idOfPhoto) ,
    commenter_id: state.session.id,
  },
}

}
const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  requestComment: (comment) => dispatch(requestComment(comment)),
  requestComments: (comments) => dispatch(requestComments(comments)),
})



export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)