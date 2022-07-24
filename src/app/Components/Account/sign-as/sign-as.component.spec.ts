import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignAsComponent } from './sign-as.component';

describe('SignAsComponent', () => {
  let component: SignAsComponent;
  let fixture: ComponentFixture<SignAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignAsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
