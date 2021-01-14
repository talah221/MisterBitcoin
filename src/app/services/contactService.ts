import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { Contact } from './contact.model';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }
  private BASE_URL = 'http://localhost:3000/contact'

  //mock the server
  private _contacts$ = new BehaviorSubject<Array<Contact>>([])
  public contacts$ = this._contacts$.asObservable()

  public loadContacts(filterBy = { name: '', phone: '' }): void {
    this.http.get<Contact[]>(this.BASE_URL)
      .pipe(
        map(contacts => {
          return contacts.filter(({ name, phone }) => {
            return name.toLowerCase().includes(filterBy.name.toLowerCase()) && phone.includes(filterBy.phone);
          })
        })
      ).subscribe(contacts => {
        console.log('load contacts, ', contacts);
        this._contacts$.next(contacts)
      })
  }

  private _updateContact(contact: Contact) {

    //mock the server work
    return this.http.put<Contact>(this.BASE_URL, contact).pipe(
      catchError(() => throwError('Cant Update Contact'))
    )
    // const contacts = this._contacts$.getValue().map(c => contact._id === c._id ? contact : c)
    // // change the observable data in the service - let all the subscribers know
    // this._contacts$.next(this._sort(contacts))
  }
  public getContactById(id: string) {
    
    return this.http.get<Contact>(this.BASE_URL + `/${id}`)
      .pipe(
        retry(1),
        catchError(() => throwError('no contact found!'))
      )

  }
  public getEmptyContact() {
    return {
      name: "",
      email: "",
      phone: ""
    }
  }

  public deleteContact(id: string) {
 return this.http.delete(this.BASE_URL+`/${id}`).subscribe(data=>{
   this.loadContacts()
 })
  }

  public saveContact(contact) {
    
    if (contact._id) return this.http.put<any>(this.BASE_URL + `/${contact._id}`, contact).subscribe(contact => this.loadContacts());
    else {
      contact._id = this._getRandomId();
    console.log('New Contact:',contact);
      return this.http.post<any>(this.BASE_URL, contact).subscribe(contact => {
        const contacts = this._contacts$.getValue()
        contacts.push(contact)
        this._contacts$.next(contacts)
      });
    }
  }


  private _addContact(contact: Contact) {
    //mock the server work
    const newContact = new Contact(undefined, contact.name, contact.email, contact.phone);
    newContact.setId();
    const contacts = [...this._contacts$.getValue(), newContact]
    this._contacts$.next(this._sort(contacts))
  }

  private _sort(contacts: Contact[]): Contact[] {
    return contacts.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }

  private _filter(contacts, term) {
    term = term.toLocaleLowerCase()
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
    })
  }

  // UTILS
  private _getRandomId() {
    var pt1 = Date.now().toString(16);
    var pt2 = this._getRandomInt(1000, 9999).toString(16);
    var pt3 = this._getRandomInt(1000, 9999).toString(16);
    return `${pt3}-${pt1}-${pt2}`.toUpperCase();
  }

  private _getRandomInt(num1, num2) {
    var max = (num1 >= num2) ? num1 + 1 : num2 + 1;
    var min = (num1 <= num2) ? num1 : num2;
    return (Math.floor(Math.random() * (max - min)) + min);
  }
}


