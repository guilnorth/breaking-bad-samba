//Import action from ducks
import { Types } from '../ducks/character';
import Api from './Api';
//Saga effects
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
const namesCharacters = require('../../utils/namesCharacters.json');
const limitListPerPage = 8;

function getCharacterList(action) {
    return Api.get(`characters?limit=${limitListPerPage}&offset=${action.payload.page * limitListPerPage}`);
}
/** 
 * Function exportada para Teste no arquivo 'character.saga.test.js'  
 * */
export function getCharacterByName(name) {
    return Api.get(`characters?name=${name}`);
}


function* requestCharacterByNameGeneral(action) {
    /** 
     * Reset Search
    */
    yield put({ type: Types.RESET_SEARCH_LIST });
    /**
     * Redirecionando para a página de Search
     */
    yield put(push('/search'))
    yield all(namesCharacters.map(nameList => {
        return (nameList.indexOf(action.payload.name.toLowerCase()) !== -1) ? call(requestCharacterByName, nameList) : true;
    }));
    /** Loading Finish Action **/
}
/** 
 * Function exportada para Teste no arquivo 'character.saga.test.js' 
 * @param name: String
 * 
 * */
export function* requestCharacterByName(name) {
    try {
        const nameWithoutSpace = name.replace(/\s+/g, "+");

        let response = yield call(getCharacterByName, nameWithoutSpace);

        if (response && response.data && response.status === 200) {

            yield put({ type: Types.ADD_SEARCH_LIST, payload: response.data });


        } else
            yield put({ type: Types.FAILURE, error: { message: '' } });

    } catch (error) {
        console.log('ERROR', error)
        yield put({ type: Types.FAILURE, error: { message: '' } });
    }
}


function* requestCharactersList(action) {
    try {

        let response = yield call(getCharacterList, action);

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
    takeLatest(Types.REQUEST_SEARCH, requestCharacterByNameGeneral),
]
