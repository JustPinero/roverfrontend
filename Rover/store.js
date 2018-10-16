import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers';


const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});
function configureStore(initialState){
  const middleWare = applyMiddleware(
      thunk,
      loggerMiddleware
    );
  return createStore(reducer, initialState, middleWare);
}
const store = configureStore({});
export default store;