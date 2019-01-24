import {
    REQUEST,
    SUCCESS,
    FAILURE,
    LOGIN,
} from './index'

function createActions( action ) {
    return {
        request: ( payload ) => ( { type: action[ REQUEST ], payload } ),
        success: payload => ( { type: action[ SUCCESS ], payload } ),
        failure: payload => ( { type: action[ FAILURE ], payload } ),
    }
}

export const login = createActions( LOGIN )