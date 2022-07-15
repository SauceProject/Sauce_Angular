import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngerdientListComponent } from './ingerdient-list.component';

describe('IngerdientListComponent', () => {
  let component: IngerdientListComponent;
  let fixture: ComponentFixture<IngerdientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngerdientListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngerdientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
