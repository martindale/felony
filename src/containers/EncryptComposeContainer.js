import _ from 'lodash'
import { connect } from 'react-redux'
import { showComposeWithType } from '../actions/index'
import EncryptCompose from '../components/encrypt/EncryptCompose'

const mapStateToProps = (state) => {
  return {
    isVisible: _.some(_.values(state.keys.get('active').toJS()), (value) => { return value }),
    expanded: state.ui.get('expandedCompose'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCompose: (type) => {
      dispatch(showComposeWithType(type))
    },
  }
}

const EncryptComposeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EncryptCompose)

export default EncryptComposeContainer