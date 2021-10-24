import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'
import { loadState, saveState } from './localStorage'

const sagaMiddleware = createSagaMiddleware()

const initialState = loadState()

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware)
)(createStore)

const store = createStoreWithMiddleware(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({ login: store.getState().login })
})

sagaMiddleware.run(saga)

export default store
