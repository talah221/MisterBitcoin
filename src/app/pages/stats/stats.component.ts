import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit,OnDestroy {

  chartData = {
    title: '',
    type: 'LineChart',
    data: [],
    columns: ['Browser', '%'],
    width: 550,
    height: 400
  }
  subscription: Subscription
  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.bitcoinService.getMarketPrice()
    this.subscription = this.bitcoinService.price$.pipe(
      filter(price => !!price)
    ).subscribe(price => {
      this.chartData.title = price.description;
      let values = price.values;
      values.forEach(value => {
        this.chartData.data.push(Object.values(value))
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
