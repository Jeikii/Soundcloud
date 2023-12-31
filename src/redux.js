import rootReducer from './store/reducer/rootReducer'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const reduxConfig = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}

export default reduxConfig
