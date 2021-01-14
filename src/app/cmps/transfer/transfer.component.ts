import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { Move } from 'src/app/models/moves';
import { UserService } from 'src/app/services/user.service';
import * as UserActions from '../../actions/user.actions'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  constructor(private store: Store<AppState> , private toastr: ToastrService) { }
  @Input() toUser
  amountToSend;

  ngOnInit(): void {
  }

  transferMoney() {
    const { store, toUser, amountToSend } = this
    if (amountToSend < 1) {
      this.toastr.warning('Cant Transfer Lower Amount than 1')
      return this.amountToSend = 0;

    }
    const userFromStore$ = store.select('user').pipe(take(1))
    const newMove: Move = { toId: toUser._id, amount: amountToSend, to: toUser.name, at: Date.now() }
    userFromStore$.subscribe(userFromStore => {
      const coins = userFromStore.coins - amountToSend;
      if (coins < 1) return this.toastr.error('Cant Transfer More than you have.')
      const moves = [newMove, ...userFromStore.moves];
      store.dispatch(new UserActions.updateUser({ ...userFromStore, coins, moves }))
      this.toastr.success(`You Succesfuly Transfered ${amountToSend} Dollars. Dollars Left: ${coins}`)
    })
    this.amountToSend = 0;
  }

}
