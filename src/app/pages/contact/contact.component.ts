import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contactService';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit,OnDestroy {

  constructor(private contactService: ContactService) { }
  contacts: Contact[]
  subs: Subscription
  ngOnInit(): void {
    this.contactService.loadContacts()
    this.subs = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
    

  }
  onFilterHandler(filterBy) {
    console.log('got filter:',filterBy);
    
    this.contactService.loadContacts(filterBy)
  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }

}
