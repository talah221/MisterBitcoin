import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contactService';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = null;
  constructor(private toastr: ToastrService, public userService: UserService, public router: Router, private route: ActivatedRoute, private contactService: ContactService, private location: Location) { }

  async ngOnInit(): Promise<void> {
    const id: string = this.route.snapshot.paramMap.get('_id')

    await this.contactService.getContactById(id).subscribe(contact => {
      this.contact = contact

    })

  }

  goBack() {
    this.location.back()
  }
  get getImg() {
    return `https://robohash.org/${this.contact.name}`;
  }

  goToEdit() {
    this.router.navigateByUrl(`/contact/edit/${this.contact._id}`);
  }

  onRemove() {
    this.toastr.success('Succesfuly Removed Contact!')
    this.contactService.deleteContact(this.contact._id)
    this.goBack()

  }
  getMoves() {
    const loggedInUser = JSON.parse(localStorage.getItem('user'))
    const movesToReturn = loggedInUser.moves.filter(move => {
      return move.toId === this.contact._id
    })
    if (!movesToReturn) return []
    return movesToReturn;
  }
  getTitle() {
    return `Last Moves for `
    // ${this.contact.name}
  }

}
