import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewCardComponent } from '../components/modals/modal-new-card/modal-new-card.component';

describe('ModalNewCardComponent', () => {
  let component: ModalNewCardComponent;
  let fixture: ComponentFixture<ModalNewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
