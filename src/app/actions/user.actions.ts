import { Action } from '@ngrx/store'
import { Move } from '../models/moves'
import { User } from '../models/user'

export const SET_USER = '[USER] LOGIN'
export const LOGOUT = '[USER] LOGOUT'
export const UPDATE_USER = '[USER] UPDATE'
export const ADD_MOVE_TO_USER = '[USER] ADD MOVE'



export class setUser implements Action {
    readonly type = SET_USER
    constructor(public payload: User) { }
}
export class logout implements Action {
    readonly type = LOGOUT
    constructor(public payload: User) { }
}
export class updateUser implements Action {
    readonly type = UPDATE_USER
    constructor(public payload: User) { }
}
export class addMove implements Action {
    // readonly type = ADD_MOVE_TO_USER
    readonly type = ADD_MOVE_TO_USER
    constructor(public payload: Move) { }
}
export type Actions = setUser | logout | updateUser | addMove