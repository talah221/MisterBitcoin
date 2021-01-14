import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  userBitcoins = null
  lastMoves = [];
  user;
  constructor(private store: Store<AppState>, private userService: UserService, private bitcoinService: BitcoinService) { }

  async ngOnInit(): Promise<void> {
    this.store.select('user').subscribe(user$ => {
      this.user = user$;
    })
    setTimeout(() => console.log('@@@,', this.user), 2000)
    // this.get3Moves()
    // this.user = this.userService.getUser()
    this.userBitcoins = await this.bitcoinService.getRate(this.user.coins)
  }

  // get3Moves() {
  //   const loggedInUser = JSON.parse(localStorage.getItem('user'))
  //   if (!loggedInUser) return this.lastMoves = null
  //   this.lastMoves = loggedInUser.moves.splice(loggedInUser.moves.length - 3, loggedInUser.moves.length)
  // }

}
