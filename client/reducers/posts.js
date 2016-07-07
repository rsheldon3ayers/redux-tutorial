//a reducer takes in
  // 1.  THe Action (what just happened)
  // 2.  Copy of the Current State (what's going to be worked on and changed)
function posts(state = [], action) {
  console.log(state, action)
  return state
}
export default posts
