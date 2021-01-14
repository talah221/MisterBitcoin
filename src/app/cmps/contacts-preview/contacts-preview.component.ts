import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/services/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contacts-preview.component.html',
  styleUrls: ['./contacts-preview.component.scss']
})
export class ContactsPreviewComponent implements OnInit {

  constructor() { }
  @Input() contact: Contact
  ngOnInit(): void {
  }
  get getImg() {
    return `https://robohash.org/${this.contact.name}`;
  }

}
