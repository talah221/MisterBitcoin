import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsPreviewComponent } from './contacts-preview.component';

describe('ContactsPreviewComponent', () => {
  let component: ContactsPreviewComponent;
  let fixture: ComponentFixture<ContactsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
