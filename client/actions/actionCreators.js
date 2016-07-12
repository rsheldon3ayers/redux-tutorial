//increment
export function increment(index){
    return {
      type: 'INCREMENT_LIKES',
      index
    }
  }
//add comment
export function addComment(postId, author, comment){
  console.log("dispatching the addComment")
  return {
    type:'ADD_COMMENT',
    postId,
    author,
    comment

  }
}

//remove comment
export function removeComment(postI, i){
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId

  }
}
