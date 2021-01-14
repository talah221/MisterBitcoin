import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveslistComponent } from './moveslist.component';

describe('MoveslistComponent', () => {
  let component: MoveslistComponent;
  let fixture: ComponentFixture<MoveslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
