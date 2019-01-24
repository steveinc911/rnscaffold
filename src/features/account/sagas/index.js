import { takeLatest } from 'redux-saga/effects'
import { all }     from 'redux-saga/effects'
import AccountAPI from '../api/security'

import {
    REQUEST,
    LOGIN
} from '../actions'

import {
    loginSaga
} from './security'

export default function* () {
    yield all([
        takeLatest(LOGIN[ REQUEST ], loginSaga, AccountAPI),
    ])
}