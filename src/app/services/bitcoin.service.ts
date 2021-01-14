import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { Price } from '../models/price';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }
  private RATE_URL = 'https://blockchain.info/tobtc?currency=USD&value=1'
  private MARKET_URL = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'

  private _rate$ = new BehaviorSubject<number>(0)
  public rate$=this._rate$.asObservable()
  
  private _price$ = new BehaviorSubject<Price>(null)
  public price$=this._price$.asObservable()


  public async getRate(coins) {
    const API_URL = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    const res = await axios.get(API_URL)
    return res.data
  }
public getMarketPrice(){
  this.http.get<Price>(this.MARKET_URL).subscribe(price=>{
    this._price$.next(price)
    // setInterval(()=>{
    //   price.values = price.values.map(({x,y}) => ({x: x +  Math.random()*1000, y: y+  Math.random()*1000}))
    //   this._price$.next(price)

    // }, 1000)
  })
}


}
