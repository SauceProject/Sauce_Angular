import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantRecipeComponent } from './resturant-recipe.component';

describe('ResturantRecipeComponent', () => {
  let component: ResturantRecipeComponent;
  let fixture: ComponentFixture<ResturantRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturantRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
