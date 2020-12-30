import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewCardItemComponent } from '../components/modals/modal-new-card-item/modal-new-card-item.component';

describe('ModalNewCardItemComponent', () => {
  let component: ModalNewCardItemComponent;
  let fixture: ComponentFixture<ModalNewCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
