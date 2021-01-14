import { Injectable } from '@angular/core';
import {Move} from '../models/moves'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  gUser = {
    name: "Ochoa Hyde",
    coins: 100,
    moves: []
  }
  public getUser() {
    return { ...this.gUser }
  }
  public signup(username) {
    const newUser = {
      username,
      coins: 100,
      moves: []
    }
    localStorage.clear()
    this._saveUser(newUser)
  }
  // toId: string,
  // to: string,
  // at: number,
  // amount: number,
  public addMove<Move>(contact, amount) {
    var user = JSON.parse(localStorage.getItem('user'));
    if(!user) return;
    user.coins = -amount;
    user.moves.push({
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount
    })
    this._saveUser(user)

  }
  private _saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
}
