import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngerdientCardsComponent } from './ingerdient-cards.component';

describe('IngerdientCardsComponent', () => {
  let component: IngerdientCardsComponent;
  let fixture: ComponentFixture<IngerdientCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngerdientCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngerdientCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
