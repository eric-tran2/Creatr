import {connect} from 'react-redux';
import { deleteTag } from '../../actions/tag_actions';
import TagIndexItem from './tag_index_item';


const mstp = state => {
  return ({
    currentUser: state.entities.users[state.session.id]
  })
}

const mdtp = dispatch => ({
  deleteTag: tagId => dispatch(deleteTag(tagId))
})

export default connect(mstp, mdtp)(TagIndexItem);

