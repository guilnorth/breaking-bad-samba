//Import action from ducks
import { Types } from '../ducks/character';
import Api from './Api';
//Saga effects
import { put, call, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

const limitListPerPage = 8;


function getCharacterList(action) {
    return Api.get(`characters?limit=${limitListPerPage}&offset=${action.page * limitListPerPage}`);
}


function* requestCharactersList(action) {
    try {

        // yield put(push('/search'))

        // let response = yield call(getCharacterList, action);
        let response = { data: { a: 123 }, status: 200 }

        console.log('data', JSON.stringify(response))

        if (response && response.data && response.status === 200) {

            yield put({ type: Types.SUCCESS, payload: response.data });


        } else
            yield put({ type: Types.FAILURE, error: { message: '' } });

    } catch (error) {
        console.log('ERROR', error)
        yield put({ type: Types.FAILURE, error: { message: '' } });
    }
}


export const characterSagas = [
    takeLatest(Types.REQUEST_LIST, requestCharactersList),

]
