import { takeLatest } from 'redux-saga/effects'
import AccountAPI from '../api/security'

import {
    REQUEST,
    LOGIN
} from '../actions'

import {
    login
} from '../actions/security'

export default function* () {
    yield [
        takeLatest(LOGIN[ REQUEST ], login, AccountAPI),
    ]
}