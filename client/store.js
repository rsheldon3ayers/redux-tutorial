import { createStore, compse } from 'redux'
import { synchHistoryWithStore } from 'react-router-redux'
import { broweserHistory } from 'react-router'

import roootReducer from './reducers/index'

import comments from './data/comments'
import posts from './data/posts'


//create an object for default data
const defaultState = {
  posts,
  comments
}

export const store = createStore(rootReducer, defaultState)
export const history = synchHistoryWithStore(broweserHistory)

export default store



