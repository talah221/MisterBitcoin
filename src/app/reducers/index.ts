
import * as UserActions from '../actions/user.actions'
import { Move } from '../models/moves';
import { User } from '../models/user';
const initialState: User = {
  name: 'Guest',
  coins: 10000,
  moves: []

}
export interface State {
  name: string,
  coins: number,
  moves: Move[]

}

export function reducer(state: User = initialState, action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.SET_USER:
      return { ...action.payload }
    case UserActions.LOGOUT:
      return { ...initialState }
    case UserActions.UPDATE_USER:
      return { ...state, ...action.payload };
    case UserActions.ADD_MOVE_TO_USER:
      return { ...state, moves: [action.payload, ...state.moves,] }
    default:
      return state;

  }
}

