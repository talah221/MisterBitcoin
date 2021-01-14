import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contactService';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {
  contact: Contact;
  submitted: boolean = false;
  subscription: Subscription;
  constructor(private location: Location, private route: ActivatedRoute, private contactService: ContactService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.subscription = this.route.paramMap.subscribe(params => {
      const id: string = params.get('id')
      if (!id) this.contact = this.contactService.getEmptyContact()
      else this.contactService.getContactById(id).subscribe(contact => {
        this.contact = contact
      })
    })
  }
  ngOnDestroy(): void {
    this.subscription = null
  }
  goBack() {
    this.toastr.show('Going Back')
    this.router.navigateByUrl('/contact');
  }

  onSubmit() {
    this.submitted = true;
    this.contactService.saveContact(this.contact)
    this.toastr.success('Succesfuly Saved Contact!')
    this.router.navigateByUrl('/contact')
  }

  onRemove() {
    this.router.navigate(['/contact']);
  }

}
