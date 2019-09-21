import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import history from '../routes/history';
import createRootReducer from './ducks'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);


const store = createStore(
    createRootReducer(history), // root reducer with router state
    compose(
        applyMiddleware(
            routeMiddleware, // for dispatching history actions
            sagaMiddleware
        ),
    ),
);
sagaMiddleware.run(rootSaga)

export default store;



