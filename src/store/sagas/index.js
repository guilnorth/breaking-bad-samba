import { characterSagas } from './character'

import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        ...characterSagas,

    ])
}