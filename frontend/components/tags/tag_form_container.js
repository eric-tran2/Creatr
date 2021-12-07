import {connect} from 'react-redux';
import { createTag, requestTag, requestTags } from '../../actions/tag_actions';
import TagForm from './tag_form';


const mapStateToProps = (state, ownProps) => ({

  tag: {
    name: '',
    photo_id: parseInt(ownProps.idOfPhoto),
    tagger_id: state.session.id,
    currentUser: state.entities.users[state.session.id],

  }
})


const mapDispatchToProps = dispatch => ({
  createTag: (tag) => dispatch(createTag(tag)),
  requestTag: (tag) => dispatch(requestTag(tag)),
  requestTags: (tags) => dispatch(requestTags(tags)),
})



export default connect(mapStateToProps, mapDispatchToProps)(TagForm)
