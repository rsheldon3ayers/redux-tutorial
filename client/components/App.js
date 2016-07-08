import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Main from './Main'

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}
//will take the Main componet and add all of the state and all the actions to it
const App = connect(mapStateToProps, mapDispatchToProps)(Main)
export default App
