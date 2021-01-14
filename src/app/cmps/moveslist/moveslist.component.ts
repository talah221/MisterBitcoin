import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moveslist',
  templateUrl: './moveslist.component.html',
  styleUrls: ['./moveslist.component.scss']
})
export class MoveslistComponent implements OnInit {
  @Input() title
  @Input() moves
  constructor() { }

  ngOnInit(): void {
    console.log('Got moves:',this.moves);
    

  }

}
