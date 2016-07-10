//a reducer takes in
  // 1.  The Action (what just happened)
  // 2.  Copy of the Current State (what's going to be worked on and changed)
function posts(state = [], action) {
  //code to edit the post goes here
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing likes!")
      const i = action.index
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i +  1),
      ]
      default:
        return state
  }
}
export default posts
